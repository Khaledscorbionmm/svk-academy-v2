'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type TargetGroup = 'kids' | 'adults';

interface UserTargetGroupContextType {
  targetGroup: TargetGroup;
  setTargetGroup: (group: TargetGroup) => void;
  toggleTargetGroup: () => void;
}

const UserTargetGroupContext = createContext<UserTargetGroupContextType | undefined>(undefined);

export function UserTargetGroupProvider({ children }: { children: React.ReactNode }) {
  const [targetGroup, setTargetGroupState] = useState<TargetGroup>('adults');

  useEffect(() => {
    const saved = localStorage.getItem('svk_target_group');
    if (saved === 'kids' || saved === 'adults') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTargetGroupState(saved);
    }
  }, []);

  const setTargetGroup = (group: TargetGroup) => {
    setTargetGroupState(group);
    localStorage.setItem('svk_target_group', group);
  };

  const toggleTargetGroup = () => {
    const nextGroup = targetGroup === 'adults' ? 'kids' : 'adults';
    setTargetGroup(nextGroup);
  };

  return (
    <UserTargetGroupContext.Provider value={{ targetGroup, setTargetGroup, toggleTargetGroup }}>
      {children}
    </UserTargetGroupContext.Provider>
  );
}

export function useTargetGroup() {
  const context = useContext(UserTargetGroupContext);
  if (!context) {
    throw new Error('useTargetGroup must be used within a UserTargetGroupProvider');
  }
  return context;
}
