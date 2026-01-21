import React, { useRef, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Upload,
    CreditCard,
    FileUp,
    Pencil,
    Eye
} from "lucide-react";

export default function InspectorProfile() {
    const name = "Jinna";
    const role = "Inspector";

    const initials = name
        .split(" ")
        .map(w => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    const [profilePhoto, setProfilePhoto] = useState(null);
    const [aadhaarPreview, setAadhaarPreview] = useState(null);

    const profileInputRef = useRef(null);

    const handleProfilePhoto = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setProfilePhoto(URL.createObjectURL(file));
    };

    const handleAadhaarUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAadhaarPreview(URL.createObjectURL(file));
    };

    return (
        <div className="min-h-screen bg-white px-6 py-10 text-black">
            <div className="max-w-6xl mx-auto space-y-10">

                <header className="space-y-2">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Inspector Account
                    </h1>
                    <p className="text-sm text-zinc-600">
                        Profile, identity & billing overview
                    </p>
                    <div className="h-px bg-zinc-200 mt-4" />
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <aside className="lg:col-span-4">
                        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 space-y-6">

                            <div className="flex flex-col items-center gap-3">
                                <div
                                    className="relative cursor-pointer"
                                    onClick={() => profileInputRef.current?.click()}
                                >
                                    <div className="w-28 h-28 rounded-full bg-black border border-zinc-300 flex items-center justify-center overflow-hidden">
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
                                    onChange={handleProfilePhoto}
                                    className="hidden"
                                />

                                <div className="text-center">
                                    <h2 className="font-semibold">{name}</h2>
                                    <p className="text-xs text-zinc-500">{role}</p>
                                </div>
                            </div>

                            <div className="divide-y divide-zinc-200">
                                <InfoRow icon={<Mail size={16} />} label="Email" value="inspector@email.com" />
                                <InfoRow icon={<Phone size={16} />} label="Phone" value="+91 98765 43210" />
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

                        <h2 className="text-2xl font-medium">Documents & Billing</h2>

                        <div className="border border-zinc-200 rounded-xl p-6 space-y-4 bg-white">
                            <h3 className="text-sm font-semibold flex items-center gap-2">
                                <FileUp size={16} /> Aadhaar Card
                            </h3>

                            <div className="h-40 bg-zinc-50 border border-dashed rounded-lg flex flex-col items-center justify-center gap-2">
                                {aadhaarPreview ? (
                                    <img
                                        src={aadhaarPreview}
                                        alt="Aadhaar"
                                        className="max-h-full rounded"
                                    />
                                ) : (
                                    <>
                                        <FileUp size={30} className="text-zinc-400" />
                                        <p className="text-xs text-zinc-500">
                                            Upload Aadhaar document
                                        </p>
                                    </>
                                )}
                            </div>

                            <label className="inline-flex items-center gap-2 text-sm cursor-pointer underline">
                                <Upload size={14} /> Choose File
                                <input
                                    type="file"
                                    accept="image/*,application/pdf"
                                    className="hidden"
                                    onChange={handleAadhaarUpload}
                                />
                            </label>
                        </div>

                        <div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50 space-y-4">
                            <h3 className="text-sm font-semibold flex items-center gap-2">
                                <CreditCard size={16} /> Saved Billing Information
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <BillingItem label="Account Number" value="XXXX XXXX 4321" />
                                <BillingItem label="Bank Name" value="State Bank of India" />
                                <BillingItem label="IFSC Code" value="SBIN0001234" />
                            </div>
                        </div>

                        <div className="border border-zinc-200 rounded-xl p-6 bg-white space-y-4">
                            <h3 className="text-sm font-semibold flex items-center gap-2">
                                <Pencil size={16} /> Edit Billing Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Input placeholder="Account Number" />
                                <Input placeholder="Bank Name" />
                                <Input placeholder="IFSC Code" />
                            </div>

                            <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-zinc-800 transition">
                                Save Billing Info
                            </button>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    );
}

const InfoRow = ({ icon, label, value, multiline }) => (
    <div className="flex gap-4 py-4">
        <div className="text-zinc-500 mt-1">{icon}</div>
        <div>
            <div className="text-[11px] uppercase tracking-widest text-zinc-500">
                {label}
            </div>
            <div
                className={`text-sm ${
                    multiline ? "whitespace-pre-line leading-relaxed" : ""
                }`}
            >
                {value}
            </div>
        </div>
    </div>
);

const Input = ({ placeholder }) => (
    <input
        placeholder={placeholder}
        className="w-full border border-zinc-300 rounded px-3 py-2 text-sm
        focus:outline-none focus:ring-1 focus:ring-black"
    />
);

const BillingItem = ({ label, value }) => (
    <div>
        <div className="text-[11px] uppercase tracking-widest text-zinc-500">
            {label}
        </div>
        <div className="font-medium">{value}</div>
    </div>
);
