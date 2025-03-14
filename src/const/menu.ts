interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: string[];
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface ImportItem {
  id: number;
  title: string;
  subtitle: string;
  rates: {
    id: number;
    period: string;
    rate: string;
  }[];
  notes: string[];
}

export const Import = [
  {
    id: 1,
    subtitle: "a. provisi",
    rates: [
      {
        id: 1,
        period: "Jangka waktu s.d 180 hari",
        rate: "0,125% min. USD 50",
      },
      {
        id: 2,
        period: "Jangka waktu > 180 hari s.d 360 hari (> 180 days to 360 days)",
        rate: "0,25% min. USD 75",
      },
      {
        id: 3,
        period: "Jangka waktu > 360 hari (> 360 days)",
        rate: "0,5% min USD 100",
      },
    ],
    credit: [
      {
        id: 1,
        period: "Jangka waktu s.d 180 hari",
        rate: "0,125% min. USD 50",
      },
      {
        id: 2,
        period: "Jangka waktu > 180 hari s.d 360 hari (> 180 days to 360 days)",
        rate: "0,25% min. USD 75",
      },
      {
        id: 3,
        period: "Jangka waktu > 360 hari (> 360 days)",
        rate: "0,5% min USD 100",
      },
    ],
    notes: [
      "Pengenaan tarif provisi pembukaan/perubahan LC/SKBDN berdasarkan jangka waktu dan amount yang dibuka/disesuaikan dengan jenis setoran jaminan yang disediakan.",
      "Tarif provisi pembukaan/perubahan penambahan jangka waktu/penambahan nilai LC/SKBDN sebagaimana tersebut di atas dikenakan secara flat dan tidak diproporsionalkan berdasarkan jangka waktunya.",
      "Jangka waktu LC/SKBDN dihitung dari tanggal penerbitan yang tercantum dalam field 31C sampai dengan expiry date LC/SKBDN yang tercantum dalam field 31D dalam MT700.",
      "Pembeanan provisi wajib dihitung dari nilai LC/SKBDN dan toleransi (jika ada).",
    ],
  },
];

export const menuItems: MenuCategory[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
