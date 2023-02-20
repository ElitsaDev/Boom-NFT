export default function Logo({ type = "default" }) {

    return (
        <>
            {type == 'default' && <img src="/images/logo.svg" alt="Image of logo" />}
            {type == 'muted' && <img src="/images/logo-muted.svg" alt="Image of logo" />}
        </>
    );
}    