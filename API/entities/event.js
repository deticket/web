

class Event {
  constructor(options) {

    this.id = options.id;
    this.firstName = options.first_name;
    this.lastName = options.last_name;
    this.dob = options.date_of_birth;
    this.idNo = options.id_no;
    this.title = options.title;
    this.description = options.description;
    this.url = options.url;
    this.docType = options.doc_type;
    this.isVerified = options.is_verified;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;
    this.status = options.status;
  }
}

module.exports = { Event }