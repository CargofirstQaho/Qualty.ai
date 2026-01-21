import React, { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  FileUp,
  Pencil,
  Upload,
  ShieldCheck
} from "lucide-react";

export default function CompanyProfile() {
  const companyData = {
    companyName: "Qualty AI Pvt Ltd",
    firstName: "Iynul",
    lastName: "Mufliha",
    companyEmail: "company@qualty.ai",
    phoneNumber: "+91 98765 43210", 
    panNumber: "ABCDE1234F",
    gstNumber: "29ABCDE1234F1Z5",
    licenseNumber: "LIC1234567890123",
    publishRequirements: true,
    createdAt: "2024-02-14",
  };

  const initials = companyData.companyName
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [publishRequirements, setPublishRequirements] = useState(companyData.publishRequirements);
  const [licenseNumber, setLicenseNumber] = useState(companyData.licenseNumber);
  const [file, setFile] = useState(null);

  const [accountNumber, setAccountNumber] = useState("XXXX XXXX 4321");
  const [bankName, setBankName] = useState("State Bank of India");
  const [ifscCode, setIfscCode] = useState("SBIN0001234");

  const [editAccount, setEditAccount] = useState("");
  const [editBank, setEditBank] = useState("");
  const [editIFSC, setEditIFSC] = useState("");

  const [panInput, setPanInput] = useState("");
  const [panVerified, setPanVerified] = useState(false);

  const profileInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const isIndia = companyData.phoneNumber.trim().startsWith("+91");

  const validatePAN = () => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    setPanVerified(panRegex.test(panInput));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Company Account</h1>
          <p className="text-sm text-gray-500">Manage company profile and documents</p>
          <div className="h-px bg-gray-200 mt-4" />
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
          <aside className="lg:col-span-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6">
              <div className="flex flex-col items-center gap-3">
                <div
                  className="relative cursor-pointer"
                  onClick={() => profileInputRef.current?.click()}
                >
                  <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-3xl font-semibold tracking-wide">
                        {initials}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-black border border-white flex items-center justify-center">
                    <Pencil size={14} className="text-white" />
                  </div>
                </div>
                <input
                  ref={profileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setProfilePhoto(URL.createObjectURL(f));
                  }}
                  className="hidden"
                />

                <div className="text-center">
                  <h2 className="font-semibold text-lg">{companyData.companyName}</h2>
                  <p className="text-xs text-gray-500">Company Account</p>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                <InfoRow icon={<User size={16} className="text-gray-500" />} label="Contact Person" value={`${companyData.firstName} ${companyData.lastName}`} />
                <InfoRow icon={<Mail size={16} className="text-gray-500" />} label="Email" value={companyData.companyEmail} />
                <InfoRow icon={<Phone size={16} className="text-gray-500" />} label="Phone" value={companyData.phoneNumber} />
                <InfoRow icon={<CreditCard size={16} className="text-gray-500" />} label="PAN" value={companyData.panNumber} />
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-6">

            {isIndia ? (
              <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck size={16} />
                  Additional Verification Required
                </div>

                <p className="text-xs text-gray-500">
                  Verify your PAN number to publish requirements on the platform
                </p>

                <div className="flex gap-3 max-w-md">
                  <input
                    value={panInput}
                    onChange={(e) => setPanInput(e.target.value.toUpperCase())}
                    placeholder="Enter 10-character PAN number"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm
                    focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <button
                    onClick={validatePAN}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-900 transition text-sm"
                  >
                    Verify
                  </button>
                </div>

                {panInput && (
                  <p className={`text-xs ${panVerified ? "text-green-600" : "text-red-600"}`}>
                    {panVerified ? "PAN verified successfully" : "Invalid PAN format"}
                  </p>
                )}
              </div>
            ) : (
              <>
           
                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={publishRequirements}
                      onChange={(e) => setPublishRequirements(e.target.checked)}
                      className="h-4 w-4 cursor-pointer accent-blue-600"
                    />
                    <label className="text-gray-900 text-sm cursor-pointer">
                      Publish requirements (enable bidding)
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs text-gray-500">License Number</label>
                    <input
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      placeholder="Enter license number"
                      className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 transition"
                    />
                    <p className="text-xs text-gray-400">Required when publishing requirements. Min 16 characters.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs text-gray-500">Incorporation Certificate</label>
                    <div className="h-32 bg-gray-50 border border-dashed rounded-lg flex flex-col items-center justify-center gap-2">
                      {file ? (
                        <div className="text-sm text-gray-900">{file.name}</div>
                      ) : (
                        <>
                          <FileUp size={30} className="text-gray-400" />
                          <p className="text-xs text-gray-500">Upload incorporation document</p>
                        </>
                      )}
                    </div>
                    <label
                      htmlFor="incorp-file"
                      className="inline-flex items-center gap-2 text-sm cursor-pointer underline hover:text-blue-600"
                    >
                      <Upload size={14} /> Choose File
                      <input
                        id="incorp-file"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                      <User size={16} /> Saved Bank Information
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-gray-500 text-xs">
                      <div>
                        <div className="uppercase tracking-widest">Account Number</div>
                        <div className="font-medium text-gray-900">{accountNumber}</div>
                      </div>
                      <div>
                        <div className="uppercase tracking-widest">Bank Name</div>
                        <div className="font-medium text-gray-900">{bankName}</div>
                      </div>
                      <div>
                        <div className="uppercase tracking-widest">IFSC Code</div>
                        <div className="font-medium text-gray-900">{ifscCode}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                      <Pencil size={16} /> Edit Bank Details
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        value={editAccount}
                        onChange={(e) => setEditAccount(e.target.value)}
                        placeholder="Account Number"
                        className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 transition"
                      />
                      <input
                        type="text"
                        value={editBank}
                        onChange={(e) => setEditBank(e.target.value)}
                        placeholder="Bank Name"
                        className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 transition"
                      />
                      <input
                        type="text"
                        value={editIFSC}
                        onChange={(e) => setEditIFSC(e.target.value)}
                        placeholder="IFSC Code"
                        className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 transition"
                      />
                    </div>
                    <button
                      className="mt-2 bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-900 transition"
                      onClick={() => {
                        if (editAccount) setAccountNumber(editAccount);
                        if (editBank) setBankName(editBank);
                        if (editIFSC) setIfscCode(editIFSC);
                        setEditAccount("");
                        setEditBank("");
                        setEditIFSC("");
                      }}
                    >
                      Save Bank Info
                    </button>
                  </div>
                </div>
              </>
            )}

          </section>
        </main>
      </div>
    </div>
  );
}

const InfoRow = ({ icon, label, value }) => (
  <div className="flex gap-4 py-3 items-start">
    <div>{icon}</div>
    <div>
      <div className="text-[11px] uppercase tracking-widest text-gray-500">{label}</div>
      <div className="text-sm text-gray-900">{value}</div>
    </div>
  </div>
);
