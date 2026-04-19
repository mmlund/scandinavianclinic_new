// Page-specific JSON-LD structured data schemas.
// All URLs use https://scandinavianclinic.com (no www).

const CLINIC_ID = "https://scandinavianclinic.com/#clinic";
const EVA_ID = "https://scandinavianclinic.com/#eva";

const baseAddress = {
  "@type": "PostalAddress",
  streetAddress: "Suite 202, 101 West 16th Street",
  addressLocality: "North Vancouver",
  addressRegion: "BC",
  postalCode: "V7M 1T3",
  addressCountry: "CA",
};

const baseGeo = {
  "@type": "GeoCoordinates",
  latitude: 49.3231474385744,
  longitude: -123.07263153558188,
};

const clinicCore = {
  "@type": "MedicalBusiness",
  "@id": CLINIC_ID,
  name: "Scandinavian Clinic",
  url: "https://scandinavianclinic.com",
  telephone: "+1-604-926-4883",
  address: baseAddress,
};

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": CLINIC_ID,
      name: "Scandinavian Clinic",
      description:
        "Registered Massage Therapy and orthopedic manual therapy clinic in North Vancouver. Clinical assessment, musculoskeletal rehabilitation, and DNS therapy.",
      url: "https://scandinavianclinic.com",
      telephone: "+1-604-926-4883",
      email: "info@scandinavianclinic.com",
      address: baseAddress,
      geo: baseGeo,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Wednesday", "Thursday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Clinical Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Registered Massage Therapy (RMT)",
              description:
                "Clinical Registered Massage Therapy for musculoskeletal conditions, injury recovery, and rehabilitation. ICBC and WSBC eligible.",
              url: "https://scandinavianclinic.com/r-m-t/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Dynamic Neuromuscular Stabilization (DNS)",
              description:
                "Rehabilitation approach targeting core stabilization and motor control, developed at the Prague School of Rehabilitation.",
              url: "https://scandinavianclinic.com/d-n-s/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Orthopedic Manual Therapy",
              description:
                "Assessment-based manual therapy for chronic pain, sports injuries, and complex musculoskeletal conditions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Western Medical Acupuncture",
              description:
                "Needling-based pain management and tissue recovery, applied as part of a broader clinical treatment plan.",
            },
          },
        ],
      },
      medicalSpecialty: ["Orthopedic", "SportsMedicine", "Musculoskeletal"],
      isAcceptingNewPatients: true,
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: "North Vancouver",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "British Columbia",
        },
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://scandinavianclinic.com/booking/",
        },
        result: {
          "@type": "Reservation",
          name: "Book an Appointment",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scandinavianclinic.com/",
        },
      ],
    },
  ],
};

export const rmtSchema = {
  "@context": "https://schema.org",
  "@graph": [
    clinicCore,
    {
      "@type": "MedicalTherapy",
      name: "Registered Massage Therapy (RMT)",
      description:
        "Clinical Registered Massage Therapy in North Vancouver. Assessment-based treatment for musculoskeletal conditions, sports injuries, and rehabilitation. ICBC and WSBC eligible.",
      url: "https://scandinavianclinic.com/r-m-t/",
      provider: { "@id": CLINIC_ID },
      medicalSpecialty: "Musculoskeletal",
      relevantSpecialty: "Orthopedic",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Registered Massage Therapy",
          item: "https://scandinavianclinic.com/r-m-t/",
        },
      ],
    },
  ],
};

export const aboutMeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    clinicCore,
    {
      "@type": "Person",
      "@id": EVA_ID,
      name: "Eva Andersson",
      jobTitle: "Registered Massage Therapist",
      url: "https://scandinavianclinic.com/about-me/",
      worksFor: { "@id": CLINIC_ID },
      knowsAbout: [
        "Registered Massage Therapy",
        "Orthopedic Manual Therapy",
        "Dynamic Neuromuscular Stabilization",
        "Western Medical Acupuncture",
        "Musculoskeletal Rehabilitation",
        "Sports Injury Treatment",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          name: "Registered Massage Therapist (RMT)",
          recognizedBy: {
            "@type": "Organization",
            name: "College of Massage Therapists of British Columbia",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://scandinavianclinic.com/about-me/" },
      ],
    },
  ],
};

export const educationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    clinicCore,
    {
      "@type": "Person",
      "@id": EVA_ID,
      name: "Eva Andersson",
      jobTitle: "Registered Massage Therapist",
      description:
        "Registered Massage Therapist with 28+ years of clinical experience in orthopedic manual therapy, Dynamic Neuromuscular Stabilization (DNS), and Western medical acupuncture.",
      url: "https://scandinavianclinic.com/education/",
      worksFor: { "@id": CLINIC_ID },
      knowsAbout: [
        "Registered Massage Therapy",
        "Orthopedic Manual Therapy",
        "Dynamic Neuromuscular Stabilization",
        "Western Medical Acupuncture",
        "Musculoskeletal Rehabilitation",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          name: "Registered Massage Therapist (RMT)",
          recognizedBy: {
            "@type": "Organization",
            name: "College of Massage Therapists of British Columbia",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://scandinavianclinic.com/about-me/" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Training & Education",
          item: "https://scandinavianclinic.com/education/",
        },
      ],
    },
  ],
};

export const firstVisitSchema = {
  "@context": "https://schema.org",
  "@graph": [
    clinicCore,
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I expect at my first Registered Massage Therapy appointment at Scandinavian Clinic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your first visit begins with a clinical assessment, including a health history review and physical evaluation. Treatment follows based on assessment findings. We recommend booking 45 to 60 minutes for your initial Registered Massage Therapy appointment.",
          },
        },
        {
          "@type": "Question",
          name: "What should I bring to my first Registered Massage Therapy appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Please bring a tank top and shorts for assessment and treatment. If you have previous imaging such as X-rays or MRIs, bring those as well. You will complete an intake form on arrival, so please arrive 10 minutes early.",
          },
        },
        {
          "@type": "Question",
          name: "Is Registered Massage Therapy covered by insurance in BC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most extended health plans in British Columbia cover Registered Massage Therapy. You pay at the time of your appointment and receive an official RMT receipt to submit to your insurance provider.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book an ICBC or WCB Registered Massage Therapy appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your Registered Massage Therapy visit is covered under ICBC, WCB, RCMP, DVA, or an MSP-exempt program, please call 604-926-4883 directly to schedule. Do not use online booking for these programs.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Your First Visit",
          item: "https://scandinavianclinic.com/first-visit/",
        },
      ],
    },
  ],
};

export const dnsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    clinicCore,
    {
      "@type": "MedicalTherapy",
      name: "Dynamic Neuromuscular Stabilization (DNS)",
      alternateName: "DNS Therapy",
      description:
        "Clinical rehabilitation approach developed at the Prague School of Rehabilitation, targeting core stabilization and motor control for chronic pain, sports injuries, and complex musculoskeletal conditions. Offered alongside Registered Massage Therapy at Scandinavian Clinic in North Vancouver.",
      url: "https://scandinavianclinic.com/d-n-s/",
      provider: { "@id": CLINIC_ID },
      medicalSpecialty: "Musculoskeletal",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "DNS Therapy", item: "https://scandinavianclinic.com/d-n-s/" },
      ],
    },
  ],
};

export const conditionsTreatedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    clinicCore,
    {
      "@type": "MedicalWebPage",
      name: "Conditions Treated with Registered Massage Therapy at Scandinavian Clinic",
      about: [
        { "@type": "MedicalCondition", name: "Back Pain" },
        { "@type": "MedicalCondition", name: "Neck Pain" },
        { "@type": "MedicalCondition", name: "Sports Injuries" },
        { "@type": "MedicalCondition", name: "Sciatica" },
        { "@type": "MedicalCondition", name: "Headaches and Migraines" },
        { "@type": "MedicalCondition", name: "Shoulder Injuries" },
        { "@type": "MedicalCondition", name: "TMJ and Jaw Pain" },
        { "@type": "MedicalCondition", name: "Chronic Pain" },
        { "@type": "MedicalCondition", name: "Motor Vehicle Accident Injuries" },
        { "@type": "MedicalCondition", name: "Workplace Injuries" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Conditions Treated",
          item: "https://scandinavianclinic.com/conditions-treated/",
        },
      ],
    },
  ],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...clinicCore,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Clinical Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Registered Massage Therapy (RMT)",
              url: "https://scandinavianclinic.com/r-m-t/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Dynamic Neuromuscular Stabilization (DNS)",
              url: "https://scandinavianclinic.com/d-n-s/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Orthopedic Manual Therapy & Assessment",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://scandinavianclinic.com/services/" },
      ],
    },
  ],
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": CLINIC_ID,
      name: "Scandinavian Clinic",
      description:
        "Registered Massage Therapy clinic in North Vancouver. Clinical orthopedic manual therapy and rehabilitation.",
      url: "https://scandinavianclinic.com",
      telephone: "+1-604-926-4883",
      email: "info@scandinavianclinic.com",
      address: baseAddress,
      geo: baseGeo,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Wednesday", "Thursday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://scandinavianclinic.com/contact/" },
      ],
    },
  ],
};

export const facilitiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...clinicCore,
      geo: baseGeo,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "Facilities", item: "https://scandinavianclinic.com/facilities/" },
      ],
    },
  ],
};

export const bookingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...clinicCore,
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://scandinavianclinic.com/booking/",
        },
        result: {
          "@type": "Reservation",
          name: "Book a Registered Massage Therapy Appointment",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
        { "@type": "ListItem", position: 2, name: "Book Appointment", item: "https://scandinavianclinic.com/booking/" },
      ],
    },
  ],
};
