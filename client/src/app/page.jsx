import StyledSearchbar from "../Components/UI/StyledSearchbar";
import { Banner, RightBar, Statistics, Widget } from "../containers";

const DashboardPage = async () => {
  return (
    <main className={`flex-1`}>
      <div className={`flex flex-col items-center w-full px-5 gap-10`}>

        {/* Search bar*/}
        <StyledSearchbar className={`w-1/2 mt-10 bg-white rounded-lg p-3 shadow-md`} />

        {/* Banner */}
        <Banner />

        {/* widget */}
        <Widget />

        {/* statistics */}
        <Statistics />
      </div>

      <RightBar />
    </main>
  );
};

export default DashboardPage;
