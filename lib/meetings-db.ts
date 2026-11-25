import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    announcements: ["Ward temple night: May 10"],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [
      { description: "Sustaining of the new Primary president" },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "As Now We Take the Sacrament",
    },
    speakers: [
      {
        name: "Sister Brown",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      { name: "Youth Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
  },
  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",
    presiding: "Bishop Smith",
    conducting: "Sister Lee",
    announcements: ["Youth activity: May 13 at 6:30 PM"],
    openingHymn: { number: 19, title: "We Thank Thee, O God, for a Prophet" },
    openingPrayer: "Brother Clark",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 185, title: "Reverently and Meekly Now" },
    speakers: [
      {
        name: "Ward members",
        topic: "Testimonies",
        type: "speaker",
      },
    ],
    closingHymn: { number: 92, title: "For the Beauty of the Earth" },
    closingPrayer: "Sister Moore",
  },
  {
    id: 3,
    date: "2026-05-17",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 6, title: "Redeemer of Israel" },
    openingPrayer: "Sister Adams",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 188, title: "Thy Will, O Lord, Be Done" },
    speakers: [
      {
        name: "Brother Carter",
        topic: "Finding peace through prayer",
        type: "speaker",
      },
      {
        name: "Sister Carter",
        topic: "Serving one another",
        type: "speaker",
      },
    ],
    closingHymn: { number: 293, title: "Each Life That Touches Ours for Good" },
    closingPrayer: "Brother Evans",
  },
  {
    id: 4,
    date: "2026-05-24",
    meetingType: "stake",
    presiding: "Stake President Miller",
    conducting: "Bishop Smith",
    announcements: ["Stake conference will be held next Sunday"],
    openingHymn: { number: 27, title: "Praise to the Man" },
    openingPrayer: "Sister Nelson",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: "I Stand All Amazed" },
    speakers: [
      {
        name: "President Miller",
        topic: "Discipleship in daily life",
        type: "speaker",
      },
    ],
    closingHymn: { number: 220, title: "Lord, I Would Follow Thee" },
    closingPrayer: "Brother Green",
  },
  {
    id: 5,
    date: "2026-11-08",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Sister Lee",
    announcements: ["Community service morning: November 14"],
    openingHymn: { number: 85, title: "How Firm a Foundation" },
    openingPrayer: "Brother Davis",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 194, title: "There Is a Green Hill Far Away" },
    speakers: [
      {
        name: "Sister Brown",
        topic: "Gratitude in every season",
        type: "speaker",
      },
      {
        name: "Primary Children",
        topic: "I Am a Child of God",
        type: "musical-number",
      },
    ],
    closingHymn: { number: 241, title: "Count Your Blessings" },
    closingPrayer: "Sister Williams",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  return date ? meetings.filter((meeting) => meeting.date === date) : [...meetings];
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}
