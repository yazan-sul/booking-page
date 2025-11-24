import React from "react";
import { User } from "lucide-react";
import Link from "next/link";
import Tooltip from "../ToolTip";

interface UserProfileProps {
  isOpen: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen }) => {
  return !isOpen ? (
    <Tooltip text="Profile">
      <Link
        href="/profile"
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200 group"
      >
        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
          <User className="w-4 h-4 text-white" />
        </div>
      </Link>
    </Tooltip>
  ) : (
    <Link
      href="/profile"
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200 group"
    >
      <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
        <User className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 transition-all duration-300">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Yazan
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Yazan@gmail.com
        </p>
      </div>
    </Link>
  );
};

export default UserProfile;
