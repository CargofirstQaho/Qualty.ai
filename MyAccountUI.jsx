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
    Building
} from "lucide-react";

const MyAccountUI = () => {
    const name = "Iynul Mufliha";

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
                                <InfoRow icon={<Mail size={16} />} label="Email" value="mufli@example.com" />
                                <InfoRow icon={<Phone size={16} />} label="Phone" value="+91 98765 43210" />
                                <InfoRow icon={<Building size={16} />} label="Company Name" value="Tech Solutions Pvt Ltd" />
                                <InfoRow
                                    icon={<MapPin size={16} />}
                                    label="Address"
                                    value="Chennai, Tamil Nadu, India"
                                    multiline
                                />
                            </div>
                        </div>
                    </aside>

                    <section className="lg:col-span-8 space-y-8">

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-medium">
                                Compliance Documents
                            </h2>
                            <span className="text-xs text-zinc-500">
                                PDF / Image formats supported
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <DocumentCard title="Trade License" />
                            <DocumentCard title="Import / Export Certificate" />
                        </div>

                        <div className="pt-6 border-t border-zinc-200">
                            <button
                                className="inline-flex items-center gap-2 px-8 py-2.5 text-sm font-medium
                                bg-black text-white rounded-md hover:bg-zinc-800 transition"
                            >
                                <Upload size={16} />
                                Submit Documents
                            </button>
                        </div>

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

const DocumentCard = ({ title }) => (
    <div className="border border-zinc-200 rounded-xl p-5 space-y-4 bg-white">
        <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-black">
                {title}
            </label>
            <span className="text-[11px] uppercase tracking-wide text-zinc-500">
                Required
            </span>
        </div>

        <div className="h-40 bg-zinc-50 border border-dashed border-zinc-300 rounded-lg
            flex flex-col items-center justify-center gap-2 text-center">
            <FileText size={34} className="text-zinc-400" />
            <p className="text-xs text-zinc-600">
                No document uploaded
            </p>
            <button className="text-xs flex items-center gap-1 text-black underline underline-offset-4">
                <Eye size={14} /> Preview
            </button>
        </div>

        <input
            type="file"
            className="block w-full text-xs text-zinc-600
            file:bg-black file:text-white file:px-4 file:py-1.5
            file:rounded-md file:border-0 hover:file:bg-zinc-800"
        />
    </div>
);

export default MyAccountUI;
