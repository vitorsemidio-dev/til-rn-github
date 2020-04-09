import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #99e9;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #99e9;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Repos = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Repo = styled.View`
  background: #222;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const RepoName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #7159c1;
  text-transform: uppercase;
  margin-right: 15px;
`;

export const Language = styled.Text`
  font-size: 13px;
  color: #fff;
  margin-top: 2px;
`;

export const LinkRepo = styled.Text`
  font-size: 10px;
  color: #00f;
`;
