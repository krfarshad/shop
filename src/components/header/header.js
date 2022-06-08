import SwitchButton from "./switch-theme/SwitchButton";
import Search from './Search';
import Menu from "./menu/Menu";
function Header() {
    return (
        <>
            <header className="shadow-md shadow-gray-200 py-6 dark:bg-slate-900">
                <div className="container max-w-[1200px] mx-auto px-8 flex relative">
                        <div className="w-2/5 logo">
                            <Search />
                        </div>
                        <div className="w-3/5 switch-theme">
                            <SwitchButton />
                            <Menu />
                        </div>
                </div>
            </header>
        </>
    )
}
export default Header;