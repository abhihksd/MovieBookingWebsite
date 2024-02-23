using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class SystemAdmin
    {
        public int AdminId { get; set; }
        public string? AdminName { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
    }
}
