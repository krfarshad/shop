import SwitchButton from "./switch-theme/SwitchButton";
import Search from './Search';
function Header() {
    return (
        <>
            <header className="shadow-md shadow-gray-200 py-6 dark:bg-slate-900">
                <div className="container max-w-[1200px] mx-auto px-8 flex relative">
                        <div className="w-1/2 logo">
                            <Search />
                        </div>
                        <div className="w-1/2 switch-theme">
                            <SwitchButton />
                        </div>
                </div>
            </header>
        </>
    )
}
export default Header;