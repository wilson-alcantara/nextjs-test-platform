import Link from "next/link";
import { useRouter } from "next/router";

const DomainLinkIssue = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Links to toggle between English and Arabic locales.</h1>

      <div>
        <Link
          href={{
            pathname: router.pathname,
            query: router.query,
          }}
          locale="en"
        >
          <a>English</a>
        </Link>
      </div>

      <div>
        <Link
          href={{
            pathname: router.pathname,
            query: router.query,
          }}
          locale="ar"
        >
          <a>Arabic</a>
        </Link>
      </div>
    </div>
  );
};

export default DomainLinkIssue;
