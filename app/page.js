import ThemeToggle from "@/components/ThemeToggle";
import BenefitsGrid from "@/components/BenefitsGrid";
import RewardPointsProgress from "@/components/RewardPointsProgress";
import UserProfileDropdown from "@/components/UserProfileDropdown";

export default function Home() {
  // Mock data for the User Profile. This data will now be passed to UserProfileDropdown.
  const userData = {
    avatarSrc: "/Avatar-PNG-Images.png", // Path to the user's avatar image in the public folder
    name: "Alex James",
    level: 7,
    currentXp: 750,
    nextLevelXp: 1000,
  };

  // Calculate the XP progress percentage for the progress bar.
  const xpProgress = (userData.currentXp / userData.nextLevelXp) * 100;

  // Mock data for Reward Points Progress component.
  const rewardData = {
    currentPoints: 2350,
    targetPoints: 3000,
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 p-4 sm:p-6 md:p-8">
      {/* Header section: Now includes UserProfileDropdown before ThemeToggle */}
      <header className="flex justify-between items-center mb-8 px-2 md:px-0">
        <h1 className="text-3xl font-bold text-primary">CRED Garage</h1>
        <div className="flex items-center space-x-4">
          {" "}
          {/* Container for profile and theme toggle */}
          {/* User Profile Dropdown Icon */}
          <UserProfileDropdown
            avatarSrc={userData.avatarSrc}
            name={userData.name}
            level={userData.level}
            xpProgress={xpProgress}
            currentXp={userData.currentXp}
            nextLevelXp={userData.nextLevelXp}
          />
          <ThemeToggle /> {/* Theme toggle button */}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BenefitsGrid />
        </div>

        {/* Reward Points Section - now spanning 1 column on large screens */}
        <div className="lg:col-span-1">
          <RewardPointsProgress
          // currentPoints={rewardData.currentPoints}
          // targetPoints={rewardData.targetPoints}
          />
        </div>
      </div>
    </main>
  );
}
