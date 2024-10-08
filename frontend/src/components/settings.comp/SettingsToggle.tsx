import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { HR } from "flowbite-react";

import settingsData from "../../constants/settings.data.json";

type Option = {
  id: number;
  title: string;
  description: string;
  enabled?: boolean;
  options?: Record<string, boolean>;
  languages?: string[];
  selected?: string;
};

const SettingsToggle: React.FC = () => {
  const [settings, setSettings] = useState<Option[]>(settingsData);

  const toggleSetting = (id: number) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const toggleNotification = (id: number, option: string) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id && setting.options
          ? {
              ...setting,
              options: {
                ...setting.options,
                [option]: !setting.options[option],
              },
            }
          : setting
      )
    );
  };

  const setLanguage = (id: number, language: string) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, selected: language } : setting
      )
    );
  };

  return (
    <div className="bg-[#F9F7F2] min-h-screen px-64 py-10">
      <h2 className="text-2xl font-light font-ivy ">Good morning Charlie!</h2>
      <p className="text-lg text-gray-600 mb-10 font-medium pb-4">
        You can change the settings for your personal data and other
        information.
      </p>

      {settings.map((setting) => (
        <div key={setting.id} className="my-6 bg-[#F9F7F2] rounded-md ">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-poppins">{setting.title}</h2>
              <p className="text-sm text-gray-600">{setting.description}</p>
            </div>
            {setting.enabled !== undefined && (
              <div
                onClick={() => toggleSetting(setting.id)}
                className="cursor-pointer"
              >
                {setting.enabled ? (
                  <FaToggleOn className="text-red-400 w-8 h-8" />
                ) : (
                  <FaToggleOff className="text-gray-500 w-8 h-8" />
                )}
              </div>
            )}
          </div>

          {setting.options && (
            <div className="mt-4 flex gap-4">
              {Object.entries(setting.options).map(([option, isEnabled]) => (
                <div
                  key={option}
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleNotification(setting.id, option)}
                >
                  <span className="text-sm mr-2">{option}</span>
                  {isEnabled ? (
                    <FaToggleOn className="text-red-400 w-6 h-6" />
                  ) : (
                    <FaToggleOff className="text-gray-500 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          )}

          {setting.languages && (
            <div className="mt-4 flex gap-4">
              {setting.languages.map((language) => (
                <div
                  key={language}
                  className="flex items-center cursor-pointer"
                  onClick={() => setLanguage(setting.id, language)}
                >
                  {setting.selected === language ? (
                    <IoMdRadioButtonOn className="text-red-400 w-5 h-5" />
                  ) : (
                    <IoMdRadioButtonOff className="text-gray-500 w-5 h-5" />
                  )}
                  <span className="ml-2 text-sm">{language}</span>
                </div>
              ))}
            </div>
          )}
          <HR className="my-6 border-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default SettingsToggle;
