const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="text-white justify-center flex py-2">Copyright &copy; {year}. All Rights Reserved.</div>
    )
}

export default Footer;