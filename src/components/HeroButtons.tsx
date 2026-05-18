import type { FC } from 'react';

interface HeroButtonsProps {
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const HeroButtons: FC<HeroButtonsProps> = ({
  primaryLabel = '进入工作台',
  // 🚨 直接在这里调用 Vite 的环境变量读取方法
  primaryHref = import.meta.env.PUBLIC_APP_URL || 'https://ai.fyzj.online',
  secondaryLabel = '阅读教程',
  secondaryHref = '/base/quick',
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        {primaryLabel}
      </a>
      <a
        href={secondaryHref}
        className="btn-secondary"
      >
        {secondaryLabel}
      </a>
    </div>
  );
};

export default HeroButtons;