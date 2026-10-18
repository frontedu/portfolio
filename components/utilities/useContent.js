import { useRouter } from "next/router";

const useContent = (content) => content[useRouter().locale];

export default useContent;
