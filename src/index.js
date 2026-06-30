'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const existing = await strapi.documents('api::blog.blog').findMany({});
    if (existing.length >= 15) return;

    const blogs = [
      {
        category: "Orthopedics and Joint Replacement Blogs",
        title: "Transforming Lives with Technology: Total Knee Replacement Success Story",
        date: "2025-10-20",
        author: "Dr. Surya Udai Singh",
        authorInitial: "SU",
        imgAlt: "knee replacement blog",
        slug: "transforming-lives-knee-replacement",
      },
      {
        category: "Orthopedics and Joint Replacement Blogs",
        title: "Hip Replacement Surgery: What to Expect Before and After",
        date: "2025-10-25",
        author: "Dr. Surya Udai Singh",
        authorInitial: "SU",
        imgAlt: "hip replacement blog",
        slug: "hip-replacement-before-after",
      },
      {
        category: "Orthopedics and Joint Replacement Blogs",
        title: "Sports Injuries: Recovery Tips from Top Orthopedic Surgeons",
        date: "2025-11-01",
        author: "Dr. Anil Kapoor",
        authorInitial: "AK",
        imgAlt: "sports injury blog",
        slug: "sports-injuries-recovery-tips",
      },
      {
        category: "Cardiology Blogs",
        title: "Heart Health: Tips for a Stronger Cardiovascular System",
        date: "2025-11-05",
        author: "Dr. Anjali Mehta",
        authorInitial: "AM",
        imgAlt: "heart health blog",
        slug: "heart-health-tips",
      },
      {
        category: "Cardiology Blogs",
        title: "Warning Signs of a Heart Attack You Should Never Ignore",
        date: "2025-11-10",
        author: "Dr. Anjali Mehta",
        authorInitial: "AM",
        imgAlt: "heart attack warning signs",
        slug: "heart-attack-warning-signs",
      },
      {
        category: "Cardiology Blogs",
        title: "How to Keep Your Blood Pressure Under Control Naturally",
        date: "2025-11-15",
        author: "Dr. Priya Nair",
        authorInitial: "PN",
        imgAlt: "blood pressure blog",
        slug: "blood-pressure-control-naturally",
      },
      {
        category: "Neurology Blogs",
        title: "Understanding Migraines: Causes and Modern Treatment Options",
        date: "2025-11-20",
        author: "Dr. Rakesh Sharma",
        authorInitial: "RS",
        imgAlt: "migraine blog",
        slug: "understanding-migraines",
      },
      {
        category: "Neurology Blogs",
        title: "Stroke Prevention: Lifestyle Changes That Make a Difference",
        date: "2025-11-25",
        author: "Dr. Rakesh Sharma",
        authorInitial: "RS",
        imgAlt: "stroke prevention blog",
        slug: "stroke-prevention-lifestyle",
      },
      {
        category: "Neurology Blogs",
        title: "Early Signs of Parkinson's Disease and When to See a Doctor",
        date: "2025-12-01",
        author: "Dr. Kavita Joshi",
        authorInitial: "KJ",
        imgAlt: "parkinsons blog",
        slug: "parkinsons-early-signs",
      },
      {
        category: "Diabetes and Endocrinology Blogs",
        title: "Managing Type 2 Diabetes: A Complete Guide for Patients",
        date: "2025-12-05",
        author: "Dr. Suresh Patel",
        authorInitial: "SP",
        imgAlt: "diabetes management blog",
        slug: "managing-type-2-diabetes",
      },
      {
        category: "Diabetes and Endocrinology Blogs",
        title: "Thyroid Disorders: Symptoms, Diagnosis and Treatment",
        date: "2025-12-10",
        author: "Dr. Suresh Patel",
        authorInitial: "SP",
        imgAlt: "thyroid blog",
        slug: "thyroid-disorders-treatment",
      },
      {
        category: "Gastroenterology Blogs",
        title: "Common Digestive Problems and How to Fix Them",
        date: "2025-12-15",
        author: "Dr. Meena Reddy",
        authorInitial: "MR",
        imgAlt: "digestive health blog",
        slug: "common-digestive-problems",
      },
      {
        category: "Gastroenterology Blogs",
        title: "Fatty Liver Disease: Causes, Risks and Prevention",
        date: "2025-12-20",
        author: "Dr. Meena Reddy",
        authorInitial: "MR",
        imgAlt: "fatty liver blog",
        slug: "fatty-liver-disease-prevention",
      },
      {
        category: "Pediatrics Blogs",
        title: "Child Vaccination Schedule: A Parent's Complete Guide",
        date: "2026-01-05",
        author: "Dr. Pooja Verma",
        authorInitial: "PV",
        imgAlt: "child vaccination blog",
        slug: "child-vaccination-schedule",
      },
      {
        category: "Pediatrics Blogs",
        title: "Nutrition Tips for Growing Children: What Every Parent Should Know",
        date: "2026-01-10",
        author: "Dr. Pooja Verma",
        authorInitial: "PV",
        imgAlt: "child nutrition blog",
        slug: "child-nutrition-tips",
      },
    ];

    for (const blog of blogs) {
      await strapi.documents('api::blog.blog').create({
        data: blog,
        status: 'published',
      });
    }

    strapi.log.info(`${blogs.length} blog entries seeded successfully.`);
  },
};
