export const missingObj: {
  placeholder: string;
  onPointerEnterCapture: undefined;
  onPointerLeaveCapture: undefined;
} = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
};

export interface PostType {
  id: number;
  title: string;
  content: string;
  isShowHome: boolean;
}
