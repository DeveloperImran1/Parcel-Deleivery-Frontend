import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center gap-2 lg:justify-start">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dqdircc96/image/upload/v1756200306/Logo_pgo5yh.png"
              alt="Logo"
              title="Pathao"
              className="h-8"
            />
          </a>
          <h2 className="text-xl font-semibold">Pathao</h2>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
