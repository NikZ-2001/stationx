"use client";

interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  formats: string[];
  paperTypes: string[];
  sizes?: string[];
  waLink: string;
  disabled: boolean;
}

interface Props {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-0 md:px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white w-full md:max-w-lg rounded-t-3xl md:rounded-3xl shadow-2xl p-6 md:p-8 z-10 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar for mobile */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-6 md:hidden" />

        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{service.icon}</span>
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h2>
            <p className="text-orange-500 text-sm font-medium">{service.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Supported Formats */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-3">Supported Formats</p>
          <div className="flex flex-wrap gap-2">
            {service.formats.map((format) => (
              <span key={format} className="bg-orange-50 border border-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">{format}</span>
            ))}
          </div>
        </div>

        {/* Paper Types */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-3">Paper Types</p>
          <div className="flex flex-wrap gap-2">
            {service.paperTypes.map((paper) => (
              <span key={paper} className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{paper}</span>
            ))}
          </div>
        </div>

        {/* Sizes if available */}
        {service.sizes && service.sizes.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-3">Available Sizes</p>
            <div className="flex flex-wrap gap-2">
              {service.sizes.map((size) => (
                <span key={size} className="bg-purple-50 border border-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">{size}</span>
              ))}
            </div>
          </div>
        )}

        {/* Privacy Note */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <span className="text-xl">🔒</span>
          <div>
            <p className="text-green-700 text-xs font-semibold mb-1">Secure Document Handling</p>
            <p className="text-green-600 text-xs leading-relaxed">Your files are completely private. We delete them immediately after printing.</p>
          </div>
        </div>

        {/* Order Button */}
        <a href={service.waLink} target="_blank" rel="noreferrer" className="block w-full bg-orange-500 text-white py-4 rounded-full font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-200">
          📱 Order Now on WhatsApp
        </a>
      </div>
    </div>
  );
}