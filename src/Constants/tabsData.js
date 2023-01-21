import { 
    ConnectWithoutContactRounded, 
    HomeRounded, 
    MessageRounded, 
    PersonRounded, 
    TerminalRounded, 
    TextSnippetRounded } from "@mui/icons-material";

export const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <PersonRounded />, ...tabProps(1) },
        { label: "مهارت های من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { label: "نمونه کارها", icon: <TerminalRounded />, ...tabProps(3) },
        { label: "نظرات مشتریان", icon: <MessageRounded />, ...tabProps(4) },
        { label: "ارتباط با من", icon: <ConnectWithoutContactRounded />, ...tabProps(5) },
    ];
    
    return tabs;
};