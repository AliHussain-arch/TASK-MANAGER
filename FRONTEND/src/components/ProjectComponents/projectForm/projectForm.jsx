export default function projectForm() { 
    return (
      <div>
        <form >
        <div>
            <label htmlFor="name">project Name</label>
            <input type="text" id="name" name="name" placeholder="project Name" />
          </div>
          <button type="submit">Add project Name </button>

        </form>
      </div>
    )
}
