import { GlobeIcon, CalendarIcon, MailIcon, Download, Book } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    globe: (props: IconProps) => <GlobeIcon {...props} />,
    calendar: (props: IconProps) => <CalendarIcon {...props} />,
    email: (props: IconProps) => <MailIcon {...props} />,
    linkedin: (props: IconProps) => (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>LinkedIn</title>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
    x: (props: IconProps) => (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>X</title>
        <path
          fill="currentColor"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        />
      </svg>
    ),
    youtube: (props: IconProps) => (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>youtube</title>
        <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
      </svg>
    ),
    github: (props: IconProps) => (
      <svg viewBox="0 0 438.549 438.549" {...props}>
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        ></path>
      </svg>
    ),
    TypeScript: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#akarIconsTypescriptFill0)">
        <path fill="currentColor" d="M23.429 0H.57A.57.57 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.57.57 0 0 0 .571-.571V.57a.57.57 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719s-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755"></path></g><defs><clipPath id="akarIconsTypescriptFill0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g>
      </svg>
      
    ),
    ReactJS: (props: IconProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" {...props}>
          <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
      </svg>
    ),
    NextJS: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512">
        <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"></path>
      </svg>
    ),
    NodeJS: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M6.177 9.769a.23.23 0 0 1 .115.2l-.004 2.968c0 .041-.022.08-.057.1a.11.11 0 0 1-.116 0l-1.137-.652a.23.23 0 0 1-.116-.2v-1.387a.23.23 0 0 0-.116-.2l-.484-.279a.23.23 0 0 0-.231 0l-.485.28a.23.23 0 0 0-.115.2v1.386a.23.23 0 0 1-.116.2l-1.139.653a.11.11 0 0 1-.114 0a.11.11 0 0 1-.058-.1L2 9.97c0-.083.044-.16.116-.201L4.03 8.667a.2.2 0 0 1 .105-.03h.02a.2.2 0 0 1 .106.03zm9.122 1.796a.06.06 0 0 0 .03-.05v-.76c0-.02-.012-.04-.03-.05l-.658-.38a.06.06 0 0 0-.058 0l-.657.38a.06.06 0 0 0-.029.05v.76c0 .02.011.04.03.05l.657.38c.018.01.04.01.058 0zm.092-5.673a.12.12 0 0 1 .115-.001l1.14.636a.23.23 0 0 1 .119.202v5.512a.23.23 0 0 1-.116.2l-1.916 1.107a.23.23 0 0 1-.231 0l-1.916-1.106a.23.23 0 0 1-.116-.2V10.03a.23.23 0 0 1 .116-.2l1.916-1.106a.23.23 0 0 1 .231 0l.48.277a.081.081 0 0 0 .121-.07V5.99a.12.12 0 0 1 .057-.1M22 10.536a.23.23 0 0 1-.115.2l-1.149.667a.12.12 0 0 1-.116 0a.12.12 0 0 1-.058-.1v-.545a.12.12 0 0 0-.057-.1l-.6-.346a.11.11 0 0 0-.116 0l-.6.346a.12.12 0 0 0-.057.1v.694c0 .04.022.08.058.1l1.927 1.105a.116.116 0 0 1 0 .202l-1.152.64a.23.23 0 0 1-.227-.002l-1.903-1.085a.23.23 0 0 1-.116-.2V10a.23.23 0 0 1 .115-.2l1.916-1.105a.23.23 0 0 1 .231 0L21.885 9.8A.23.23 0 0 1 22 10zm-10.115 7.589a.4.4 0 0 1-.19-.05l-.602-.358c-.09-.05-.046-.068-.017-.078a1.2 1.2 0 0 0 .273-.124q.022-.01.045.003l.463.275c.017.009.04.009.056 0l1.806-1.043a.06.06 0 0 0 .028-.049v-2.084c0-.02-.01-.04-.028-.05l-1.805-1.041a.06.06 0 0 0-.056 0l-1.805 1.041a.06.06 0 0 0-.029.05V16.7c0 .02.011.039.028.048l.495.286c.268.134.432-.024.432-.183v-2.057c0-.03.024-.052.053-.052h.229c.028 0 .052.022.052.052v2.058c0 .358-.196.563-.535.563c-.105 0-.187 0-.417-.113l-.473-.273a.38.38 0 0 1-.19-.33v-2.083a.38.38 0 0 1 .19-.33l1.808-1.043a.4.4 0 0 1 .38 0l1.805 1.044a.38.38 0 0 1 .19.329V16.7a.38.38 0 0 1-.19.33l-1.806 1.042a.4.4 0 0 1-.19.051m.558-1.436c-.79 0-.956-.363-.956-.667c0-.03.024-.052.053-.052h.233a.05.05 0 0 1 .051.044c.036.238.14.358.618.358c.381 0 .543-.087.543-.288c0-.117-.046-.203-.638-.26c-.494-.05-.8-.159-.8-.554c0-.364.308-.582.823-.582c.578 0 .864.201.9.632a.052.052 0 0 1-.052.057h-.235a.05.05 0 0 1-.05-.04c-.057-.25-.193-.33-.564-.33c-.416 0-.464.144-.464.253c0 .132.057.17.617.244c.556.074.82.178.82.568c0 .393-.33.619-.901.619zm2.198-2.209h.06c.05 0 .06-.034.06-.055c0-.053-.037-.053-.058-.053h-.062zm-.074-.17h.134c.046 0 .137 0 .137.103c0 .071-.046.086-.074.095c.053.004.057.038.064.085v.004l.001.004c.004.031.01.082.02.1h-.083l-.001-.013l-.014-.11c-.005-.023-.013-.034-.04-.034h-.069v.157h-.075zm.478.194a.349.349 0 1 1-.348-.348c.188 0 .348.152.348.349m4.792-3.872a.04.04 0 0 1 .045 0l.367.212a.05.05 0 0 1 .023.039v.424q-.001.025-.023.038l-.367.213a.04.04 0 0 1-.045 0l-.367-.213a.04.04 0 0 1-.022-.038v-.424q0-.025.022-.039zM9.545 8.756a.24.24 0 0 0-.237 0L7.34 9.891a.24.24 0 0 0-.118.206v2.273c0 .084.046.163.12.205l1.966 1.136a.24.24 0 0 0 .237 0l1.966-1.136a.24.24 0 0 0 .119-.205v-2.273a.24.24 0 0 0-.119-.206z" clipRule="evenodd"></path>
      </svg>
    ),
    PHP: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209q.086-.457-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z"></path>
      </svg>
    ),
    MySQL: (props: IconProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" {...props}>
          <path fill="currentColor" fillRule="evenodd" d="M5.462 4.04a2.65 2.65 0 0 0-.67.074v.038h.037c.13.267.36.44.521.67l.372.781l.038-.037c.23-.162.336-.422.335-.819c-.093-.097-.107-.219-.187-.335c-.106-.154-.312-.242-.446-.372m18.017 19.097c.175.129.293.329.521.41v-.038c-.12-.152-.15-.362-.26-.521a73.62 73.62 0 0 1-.484-.484a7.948 7.948 0 0 0-1.713-1.638c-.508-.365-1.649-.859-1.861-1.451l-.038-.038c.361-.04.784-.171 1.117-.26c.56-.15 1.06-.112 1.638-.26c.261-.076.521-.15.782-.224v-.15c-.292-.3-.5-.696-.819-.967c-.834-.71-1.743-1.42-2.68-2.01c-.52-.329-1.162-.541-1.713-.82c-.185-.093-.51-.142-.632-.297c-.29-.37-.447-.837-.67-1.266c-.467-.9-.927-1.883-1.34-2.83c-.283-.645-.467-1.281-.82-1.86c-1.69-2.78-3.51-4.457-6.328-6.106c-.6-.35-1.322-.489-2.084-.67l-1.229-.074c-.25-.105-.51-.41-.744-.559C3.188.434.792-.849.102.838c-.437 1.065.652 2.104 1.042 2.643c.273.379.623.803.819 1.229c.128.28.15.56.26.856c.271.73.506 1.522.856 2.196c.178.341.373.7.596 1.005c.138.187.372.27.409.559c-.23.321-.242.82-.371 1.228c-.582 1.835-.363 4.115.484 5.473c.259.416.87 1.31 1.711.967c.736-.3.572-1.228.782-2.047c.047-.186.019-.323.112-.447v.037l.67 1.34c.496.799 1.376 1.634 2.122 2.197c.386.292.69.797 1.191.968v-.038h-.037c-.098-.15-.25-.213-.372-.335a8.554 8.554 0 0 1-.857-.968c-.678-.92-1.277-1.928-1.823-2.977c-.261-.502-.488-1.054-.708-1.564c-.085-.197-.084-.494-.26-.596c-.241.374-.596.676-.782 1.117c-.298.705-.337 1.565-.447 2.457c-.065.023-.036.007-.075.037c-.518-.125-.7-.659-.893-1.117c-.487-1.157-.578-3.022-.149-4.355c.111-.345.613-1.431.41-1.75c-.098-.318-.417-.501-.596-.744A5.83 5.83 0 0 1 3.6 7.166c-.398-.902-.585-1.916-1.005-2.829c-.2-.436-.54-.877-.819-1.265c-.308-.43-.654-.746-.893-1.266c-.085-.185-.201-.48-.075-.67c.04-.128.097-.182.224-.223c.216-.167.817.055 1.042.148c.597.248 1.095.484 1.6.82c.243.16.489.472.782.558h.335c.525.12 1.112.037 1.601.186c.865.263 1.64.672 2.345 1.117c2.146 1.355 3.9 3.283 5.1 5.584c.193.37.277.724.447 1.117c.343.792.775 1.607 1.116 2.382c.34.773.673 1.553 1.154 2.196c.253.338 1.231.52 1.676.708c.311.131.821.269 1.116.446c.564.34 1.11.745 1.638 1.117c.264.187 1.077.595 1.117.93c-1.31-.034-2.31.087-3.164.448c-.243.102-.63.105-.67.409c.133.14.154.35.26.521c.204.33.549.773.856 1.005c.337.254.683.525 1.043.745c.64.39 1.356.614 1.972 1.005c.365.231.726.521 1.08.782" />
      </svg>
    ),
    CV: (props: IconProps) => (
      <Book {...props} />
    )
  };