import styled from "@emotion/styled";
import { css } from "assets/css/variable";

interface TagListProps {
  limit?: number;
  list: string[];
}
export const TagList = ({ limit, list }: TagListProps) => {
  const showList = limit ? list.slice(0, limit) : list;
  return (
    <TagListWrapper>
      {showList.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
    </TagListWrapper>
  );
};

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .tag {
    border-radius: 12px;
    padding: 4px 12px;
    margin-right: 6px;
    margin-bottom: 12px;
    background: ${css.colorGrey};
  }
`;
