const by = (regex: RegExp) => (edge: any) => edge.node.frontmatter.path && edge.node.frontmatter.path.match(regex);
const edgeToPage = (edge: any) => ({
    title: edge.node.frontmatter.title,
    path: edge.node.frontmatter.path,
});

const profile = (rawPages: any) => ({
    pages: rawPages.edges.filter(by(/^\/profil/)).map(edgeToPage),
    sectionTitle: "Profilelementer",
    matchingLocation: (location: any) => location.pathname.includes("profil"),
});
const core = (rawPages: any) => ({
    pages: rawPages.edges.filter(by(/^\/kjerne/)).map(edgeToPage),
    sectionTitle: "Grunnleggende",
    matchingLocation: (location: any) => !!location.pathname.match(/kjerne/) || location.pathname === "/",
});
const developer = (rawPages: any) => ({
    pages: rawPages.edges.filter(by(/^\/utvikler/)).map(edgeToPage),
    sectionTitle: "For utviklere",
    matchingLocation: (location: any) => location.pathname.includes("utvikler"),
});
const designer = (rawPages: any) => ({
    pages: rawPages.edges.filter(by(/^\/designer/)).map(edgeToPage),
    sectionTitle: "For designere",
    matchingLocation: (location: any) => location.pathname.includes("designer"),
});
const components = (rawComponents: any) => ({
    pages: rawComponents.edges.map((edge: any) => ({
        title: edge.node.context.frontmatter.title,
        path: edge.node.path,
    })),
    sectionTitle: "Komponenter",
    matchingLocation: (location: any) => location.pathname.includes("example/ex"),
});

const makeLink = (title: string, page: string, section?: string) => ({
    title,
    page,
    section,
});

const makeExampleLink = (title: string, page: string) => makeLink(title, page, "example");

export const exampleLinks = [
    makeExampleLink("Kjøpsflyt", "purchaseFlow"),
    makeExampleLink("Footer", "footer"),
    makeExampleLink("Header", "header"),
];

const examples = {
    pages: exampleLinks.map(({ title, section, page }) => ({ title, path: `/${section}/${page}` })),
    sectionTitle: "Eksempler",
    matchingLocation: (location: any) => location.pathname.includes("example"),
};

export const mainMenu = (rawPages: any, rawComponents: any) => [
    core(rawPages),
    profile(rawPages),
    designer(rawPages),
    developer(rawPages),
    components(rawComponents),
    examples,
];

export const staticLinks = [
    {
        href: "https://github.com/fremtind/jokul",
        linkText: "Kode på Github",
        className: "portal-menu__link--github",
    },
    {
        href: "https://github.com/fremtind/jokul/issues/new?assignees=&labels=bug&template=bug_report.md&title=",
        linkText: "Rapporter feil",
        className: "portal-menu__link--github",
    },
    {
        href:
            "https://github.com/fremtind/jokul/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=",
        linkText: "Forslag ny funksjon",
        className: "portal-menu__link--github",
    },
    {
        href: "https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components",
        linkText: "Designbibliotek",
        className: "portal-menu__link--figma",
    },
];
