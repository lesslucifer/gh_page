import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const switchLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={router.locale === 'en' ? 'default' : 'outline'}
        onClick={() => switchLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={router.locale === 'vi' ? 'default' : 'outline'}
        onClick={() => switchLanguage('vi')}
      >
        VI
      </Button>
    </div>
  );
}
