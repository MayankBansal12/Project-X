const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="text-white justify-center flex p-1">Copyright &copy; {year} Cine-X. All Rights Reserved.</div>
    )
}

export default Footer;