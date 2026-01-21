import { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Upload,
  Eye,
  Pencil,
  Building,
  ShieldCheck
} from "lucide-react";

const MyAccountUI = () => {
  const name = "Iynul Mufliha";
  const email = "mufli@example.com";
  const company = "Tech Solutions Pvt Ltd";
  const address = "Chennai, Tamil Nadu, India";


  const phoneData = {
    countryCode: "+91",
    number: "9876543210"
  };

  const isIndia = phoneData.countryCode === "+91";

  const initial = name
    ?.trim()
    ?.split(" ")
    ?.map(word => word.charAt(0))
    ?.slice(0, 2)
    ?.join("")
    ?.toUpperCase();

  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setProfilePhoto(previewUrl);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 text-black">
      <div className="max-w-7xl mx-auto space-y-10">

        <header className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Account Overview
          </h1>
          <p className="text-sm text-zinc-600 max-w-xl">
            Manage identity information and business compliance documents
          </p>
          <div className="h-px bg-zinc-200 mt-4" />
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <aside className="lg:col-span-4">
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 space-y-6">

              <div className="flex flex-col items-center gap-3">
                <div
                  className="relative cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border border-zinc-300 bg-black flex items-center justify-center">
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : initial ? (
                      <span className="text-3xl font-semibold tracking-wide text-white">
                        {initial}
                      </span>
                    ) : (
                      <User size={40} className="text-white" />
                    )}
                  </div>

                  <div
                    className="absolute bottom-1 right-1 w-7 h-7
                    rounded-full bg-white border border-black
                    flex items-center justify-center shadow-sm"
                  >
                    <Pencil size={14} className="text-black" />
                  </div>
                </div>

                <span className="text-xs uppercase tracking-wide text-zinc-500">
                  Profile Photo
                </span>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </div>

              <div className="divide-y divide-zinc-200">
                <InfoRow icon={<User size={16} />} label="Name" value={name} />
                <InfoRow icon={<Mail size={16} />} label="Email" value={email} />
                <InfoRow
                  icon={<Phone size={16} />}
                  label="Phone"
                  value={`${phoneData.countryCode} ${phoneData.number}`}
                />
                <InfoRow icon={<Building size={16} />} label="Company Name" value={company} />
                <InfoRow
                  icon={<MapPin size={16} />}
                  label="Address"
                  value={address}
                  multiline
                />
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-8">

            {isIndia && (
              <div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-black mb-1">
                      Additional Verification Required
                    </h3>
                    <p className="text-xs text-zinc-600 mb-4">
                      Verify your GST number to publish requirements on the platform
                    </p>

                    <div className="flex gap-3 max-w-md">
                      <input
                        type="text"
                        placeholder="Enter 15-digit GST number"
                        className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                      />
                      <button className="px-5 rounded-lg bg-black text-white text-sm font-medium hover:bg-zinc-800 transition">
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isIndia && (
              <div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-sm font-semibold text-black">
                      Additional Verification Required
                    </h3>
                    <p className="text-xs text-zinc-600">
                      Upload legal documents to publish requirements on the platform
                    </p>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-black flex items-center gap-2">
                        <FileText size={16} />
                        Trade License / Legal Document
                      </label>

                      <input
                        type="file"
                        className="block w-full text-sm text-zinc-700
                        file:bg-black file:text-white file:px-4 file:py-2
                        file:rounded-md file:border-0 hover:file:bg-zinc-800"
                      />

                      <p className="text-xs text-zinc-500">
                        Upload legal document (PDF, JPG, PNG allowed, Max 5MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </section>
        </main>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value, multiline }) => (
  <div className="flex gap-4 py-4">
    <div className="text-zinc-500 mt-1">{icon}</div>
    <div className="flex-1">
      <div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-0.5">
        {label}
      </div>
      <div
        className={`text-sm text-black ${
          multiline ? "whitespace-pre-line leading-relaxed" : ""
        }`}
      >
        {value}
      </div>
    </div>
  </div>
);

export default MyAccountUI;
