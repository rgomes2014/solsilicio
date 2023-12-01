const Text = ({tag, children, ...rest}) => {
    const Tag = tag || 'div';
    return(
        <Tag {...rest}>{children}</Tag>
    );
}

export default Text;