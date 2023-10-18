"use client";
import localFont from "next/font/local";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});

export default function UserName() {
  const router = useRouter();
  const { state, setState } = useAuthContext();
  const handleLogout = () => {
    console.log("clicked");
    let checkbox = document.querySelector(".user-input-checkbox");
    checkbox.checked = false;
    setState({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <div className="user-name">
      <h5 className={satoshi.className}>{state?.user?.name}</h5>
      <p className={satoshi.className}>{state?.user?.email}</p>
      <button
        className={satoshi.className}
        type="button"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
}
