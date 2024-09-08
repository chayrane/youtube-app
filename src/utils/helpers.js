// Format number into Thousands, Millions, Billions Notations.
export const formatNumber = (num) => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + "B"; // Billion
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + "M"; // Million
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + "K"; // Thousand
  } else {
    return num; // Less than 1000
  }
};

// Calculate relative time.
export const timeAgo = (dateString) => {
  const now = new Date(); // Current date and time
  const pastDate = new Date(dateString); // Convert the date string to a Date object

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = now - pastDate;

  // Calculate differences in various units
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(
    differenceInMilliseconds / (1000 * 60)
  );
  const differenceInHours = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60)
  );
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  // Return the relative time as a string
  if (differenceInDays > 0) {
    return `${differenceInDays} days ago`;
  }
  if (differenceInHours > 0) {
    return `${differenceInHours} hours ago`;
  }
  if (differenceInMinutes > 0) {
    return `${differenceInMinutes} minutes ago`;
  }
  return `${differenceInSeconds} seconds ago`;
};

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

// Generate random names
export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// Generate random strings
export const generateRandomMessage = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
