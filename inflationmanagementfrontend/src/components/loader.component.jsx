import '../styles/loader.component.css';

export default function LoaderComponent() {
    return (
        <div id="first_div">
            <div id="second_div" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}