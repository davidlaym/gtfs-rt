declare module 'gtfs-realtime-bindings' {
  namespace $protobuf {
    export class Writer {}
    export class Reader {}
    export class ConversionOptions {}
  }
  /**
   * Properties of a FeedMessage.
   * @typedef transit_realtime.FeedMessage$Properties
   * @type {Object}
   * @property {transit_realtime.FeedHeader$Properties} header FeedMessage header.
   * @property {Array.<transit_realtime.FeedEntity$Properties>} [entity] FeedMessage entity.
   */
  type FeedMessage$Properties = {
    header: FeedHeader$Properties
    entity?: FeedEntity$Properties[]
  }
  /**
   * Constructs a new FeedMessage.
   * @exports transit_realtime.FeedMessage
   * @constructor
   * @param {transit_realtime.FeedMessage$Properties=} [properties] Properties to set
   */
  class FeedMessage {
    constructor(properties?: FeedMessage$Properties)
    /**
     * FeedMessage header.
     * @type {transit_realtime.FeedHeader$Properties}
     */
    header: FeedHeader$Properties
    /**
     * FeedMessage entity.
     * @type {Array.<transit_realtime.FeedEntity$Properties>}
     */
    entity: FeedEntity$Properties[]
    /**
     * Creates a new FeedMessage instance using the specified properties.
     * @param {transit_realtime.FeedMessage$Properties=} [properties] Properties to set
     * @returns {transit_realtime.FeedMessage} FeedMessage instance
     */
    static create(properties?: FeedMessage$Properties): FeedMessage
    /**
     * Encodes the specified FeedMessage message. Does not implicitly {@link transit_realtime.FeedMessage.verify|verify} messages.
     * @param {transit_realtime.FeedMessage$Properties} message FeedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: FeedMessage$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified FeedMessage message, length delimited. Does not implicitly {@link transit_realtime.FeedMessage.verify|verify} messages.
     * @param {transit_realtime.FeedMessage$Properties} message FeedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: FeedMessage$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a FeedMessage message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.FeedMessage} FeedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): FeedMessage
    /**
     * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.FeedMessage} FeedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FeedMessage
    /**
     * Verifies a FeedMessage message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.FeedMessage} FeedMessage
     */
    static fromObject(object: { [key: string]: any }): FeedMessage
    /**
     * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.FeedMessage.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.FeedMessage} FeedMessage
     */
    static from(object: { [key: string]: any }): FeedMessage
    /**
     * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
     * @param {transit_realtime.FeedMessage} message FeedMessage
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: FeedMessage,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this FeedMessage message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this FeedMessage to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  /**
   * Properties of a FeedHeader.
   * @typedef transit_realtime.FeedHeader$Properties
   * @type {Object}
   * @property {string} gtfsRealtimeVersion FeedHeader gtfsRealtimeVersion.
   * @property {transit_realtime.FeedHeader.Incrementality} [incrementality] FeedHeader incrementality.
   * @property {number|Long} [timestamp] FeedHeader timestamp.
   */
  type FeedHeader$Properties = {
    gtfsRealtimeVersion: string
    incrementality?: FeedHeader.Incrementality
    timestamp?: number
  }
  /**
   * Constructs a new FeedHeader.
   * @exports transit_realtime.FeedHeader
   * @constructor
   * @param {transit_realtime.FeedHeader$Properties=} [properties] Properties to set
   */
  class FeedHeader {
    constructor(properties?: FeedHeader$Properties)
    /**
     * FeedHeader gtfsRealtimeVersion.
     * @type {string}
     */
    gtfsRealtimeVersion: string
    /**
     * FeedHeader incrementality.
     * @type {transit_realtime.FeedHeader.Incrementality}
     */
    incrementality: FeedHeader.Incrementality
    /**
     * FeedHeader timestamp.
     * @type {number|Long}
     */
    timestamp: number
    /**
     * Creates a new FeedHeader instance using the specified properties.
     * @param {transit_realtime.FeedHeader$Properties=} [properties] Properties to set
     * @returns {transit_realtime.FeedHeader} FeedHeader instance
     */
    static create(properties?: FeedHeader$Properties): FeedHeader
    /**
     * Encodes the specified FeedHeader message. Does not implicitly {@link transit_realtime.FeedHeader.verify|verify} messages.
     * @param {transit_realtime.FeedHeader$Properties} message FeedHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: FeedHeader$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified FeedHeader message, length delimited. Does not implicitly {@link transit_realtime.FeedHeader.verify|verify} messages.
     * @param {transit_realtime.FeedHeader$Properties} message FeedHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: FeedHeader$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a FeedHeader message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.FeedHeader} FeedHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): FeedHeader
    /**
     * Decodes a FeedHeader message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.FeedHeader} FeedHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FeedHeader
    /**
     * Verifies a FeedHeader message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a FeedHeader message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.FeedHeader} FeedHeader
     */
    static fromObject(object: { [key: string]: any }): FeedHeader
    /**
     * Creates a FeedHeader message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.FeedHeader.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.FeedHeader} FeedHeader
     */
    static from(object: { [key: string]: any }): FeedHeader
    /**
     * Creates a plain object from a FeedHeader message. Also converts values to other types if specified.
     * @param {transit_realtime.FeedHeader} message FeedHeader
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: FeedHeader,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this FeedHeader message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this FeedHeader to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  module FeedHeader {
    /**
     * Incrementality enum.
     * @name Incrementality
     * @memberof transit_realtime.FeedHeader
     * @enum {number}
     * @property {number} FULL_DATASET=0 FULL_DATASET value
     * @property {number} DIFFERENTIAL=1 DIFFERENTIAL value
     */
    enum Incrementality {
      FULL_DATASET,
      DIFFERENTIAL
    }
  }
  /**
   * Properties of a FeedEntity.
   * @typedef transit_realtime.FeedEntity$Properties
   * @type {Object}
   * @property {string} id FeedEntity id.
   * @property {boolean} [isDeleted] FeedEntity isDeleted.
   * @property {transit_realtime.TripUpdate$Properties} [tripUpdate] FeedEntity tripUpdate.
   * @property {transit_realtime.VehiclePosition$Properties} [vehicle] FeedEntity vehicle.
   * @property {transit_realtime.Alert$Properties} [alert] FeedEntity alert.
   */
  type FeedEntity$Properties = {
    id: string
    isDeleted?: boolean
    tripUpdate?: TripUpdate$Properties
    vehicle?: VehiclePosition$Properties
    alert?: Alert$Properties
  }
  /**
   * Constructs a new FeedEntity.
   * @exports transit_realtime.FeedEntity
   * @constructor
   * @param {transit_realtime.FeedEntity$Properties=} [properties] Properties to set
   */
  class FeedEntity {
    constructor(properties?: FeedEntity$Properties)
    /**
     * FeedEntity id.
     * @type {string}
     */
    id: string
    /**
     * FeedEntity isDeleted.
     * @type {boolean}
     */
    isDeleted: boolean
    /**
     * FeedEntity tripUpdate.
     * @type {(transit_realtime.TripUpdate$Properties|null)}
     */
    tripUpdate: TripUpdate$Properties | null
    /**
     * FeedEntity vehicle.
     * @type {(transit_realtime.VehiclePosition$Properties|null)}
     */
    vehicle: VehiclePosition$Properties | null
    /**
     * FeedEntity alert.
     * @type {(transit_realtime.Alert$Properties|null)}
     */
    alert: Alert$Properties | null
    /**
     * Creates a new FeedEntity instance using the specified properties.
     * @param {transit_realtime.FeedEntity$Properties=} [properties] Properties to set
     * @returns {transit_realtime.FeedEntity} FeedEntity instance
     */
    static create(properties?: FeedEntity$Properties): FeedEntity
    /**
     * Encodes the specified FeedEntity message. Does not implicitly {@link transit_realtime.FeedEntity.verify|verify} messages.
     * @param {transit_realtime.FeedEntity$Properties} message FeedEntity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: FeedEntity$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified FeedEntity message, length delimited. Does not implicitly {@link transit_realtime.FeedEntity.verify|verify} messages.
     * @param {transit_realtime.FeedEntity$Properties} message FeedEntity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: FeedEntity$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a FeedEntity message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.FeedEntity} FeedEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): FeedEntity
    /**
     * Decodes a FeedEntity message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.FeedEntity} FeedEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FeedEntity
    /**
     * Verifies a FeedEntity message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a FeedEntity message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.FeedEntity} FeedEntity
     */
    static fromObject(object: { [key: string]: any }): FeedEntity
    /**
     * Creates a FeedEntity message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.FeedEntity.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.FeedEntity} FeedEntity
     */
    static from(object: { [key: string]: any }): FeedEntity
    /**
     * Creates a plain object from a FeedEntity message. Also converts values to other types if specified.
     * @param {transit_realtime.FeedEntity} message FeedEntity
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: FeedEntity,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this FeedEntity message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this FeedEntity to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  /**
   * Properties of a TripUpdate.
   * @typedef transit_realtime.TripUpdate$Properties
   * @type {Object}
   * @property {transit_realtime.TripDescriptor$Properties} trip TripUpdate trip.
   * @property {transit_realtime.VehicleDescriptor$Properties} [vehicle] TripUpdate vehicle.
   * @property {Array.<transit_realtime.TripUpdate.StopTimeUpdate$Properties>} [stopTimeUpdate] TripUpdate stopTimeUpdate.
   * @property {number|Long} [timestamp] TripUpdate timestamp.
   * @property {number} [delay] TripUpdate delay.
   */
  type TripUpdate$Properties = {
    trip: TripDescriptor$Properties
    vehicle?: VehicleDescriptor$Properties
    stopTimeUpdate?: TripUpdate.StopTimeUpdate$Properties[]
    timestamp?: number
    delay?: number
  }
  /**
   * Constructs a new TripUpdate.
   * @exports transit_realtime.TripUpdate
   * @constructor
   * @param {transit_realtime.TripUpdate$Properties=} [properties] Properties to set
   */
  class TripUpdate {
    constructor(properties?: TripUpdate$Properties)
    /**
     * TripUpdate trip.
     * @type {transit_realtime.TripDescriptor$Properties}
     */
    trip: TripDescriptor$Properties
    /**
     * TripUpdate vehicle.
     * @type {(transit_realtime.VehicleDescriptor$Properties|null)}
     */
    vehicle: VehicleDescriptor$Properties | null
    /**
     * TripUpdate stopTimeUpdate.
     * @type {Array.<transit_realtime.TripUpdate.StopTimeUpdate$Properties>}
     */
    stopTimeUpdate: TripUpdate.StopTimeUpdate$Properties[]
    /**
     * TripUpdate timestamp.
     * @type {number|Long}
     */
    timestamp: number
    /**
     * TripUpdate delay.
     * @type {number}
     */
    delay: number
    /**
     * Creates a new TripUpdate instance using the specified properties.
     * @param {transit_realtime.TripUpdate$Properties=} [properties] Properties to set
     * @returns {transit_realtime.TripUpdate} TripUpdate instance
     */
    static create(properties?: TripUpdate$Properties): TripUpdate
    /**
     * Encodes the specified TripUpdate message. Does not implicitly {@link transit_realtime.TripUpdate.verify|verify} messages.
     * @param {transit_realtime.TripUpdate$Properties} message TripUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: TripUpdate$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified TripUpdate message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.verify|verify} messages.
     * @param {transit_realtime.TripUpdate$Properties} message TripUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: TripUpdate$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a TripUpdate message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.TripUpdate} TripUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): TripUpdate
    /**
     * Decodes a TripUpdate message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.TripUpdate} TripUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TripUpdate
    /**
     * Verifies a TripUpdate message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a TripUpdate message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TripUpdate} TripUpdate
     */
    static fromObject(object: { [key: string]: any }): TripUpdate
    /**
     * Creates a TripUpdate message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.TripUpdate.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TripUpdate} TripUpdate
     */
    static from(object: { [key: string]: any }): TripUpdate
    /**
     * Creates a plain object from a TripUpdate message. Also converts values to other types if specified.
     * @param {transit_realtime.TripUpdate} message TripUpdate
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: TripUpdate,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this TripUpdate message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this TripUpdate to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  module TripUpdate {
    /**
     * Properties of a StopTimeEvent.
     * @typedef transit_realtime.TripUpdate.StopTimeEvent$Properties
     * @type {Object}
     * @property {number} [delay] StopTimeEvent delay.
     * @property {number|Long} [time] StopTimeEvent time.
     * @property {number} [uncertainty] StopTimeEvent uncertainty.
     */
    type StopTimeEvent$Properties = {
      delay?: number
      time?: number
      uncertainty?: number
    }
    /**
     * Constructs a new StopTimeEvent.
     * @exports transit_realtime.TripUpdate.StopTimeEvent
     * @constructor
     * @param {transit_realtime.TripUpdate.StopTimeEvent$Properties=} [properties] Properties to set
     */
    class StopTimeEvent {
      constructor(properties?: TripUpdate.StopTimeEvent$Properties)
      /**
       * StopTimeEvent delay.
       * @type {number}
       */
      delay: number
      /**
       * StopTimeEvent time.
       * @type {number|Long}
       */
      time: number
      /**
       * StopTimeEvent uncertainty.
       * @type {number}
       */
      uncertainty: number
      /**
       * Creates a new StopTimeEvent instance using the specified properties.
       * @param {transit_realtime.TripUpdate.StopTimeEvent$Properties=} [properties] Properties to set
       * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent instance
       */
      static create(
        properties?: TripUpdate.StopTimeEvent$Properties
      ): TripUpdate.StopTimeEvent
      /**
       * Encodes the specified StopTimeEvent message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeEvent.verify|verify} messages.
       * @param {transit_realtime.TripUpdate.StopTimeEvent$Properties} message StopTimeEvent message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      static encode(
        message: TripUpdate.StopTimeEvent$Properties,
        writer?: $protobuf.Writer
      ): $protobuf.Writer
      /**
       * Encodes the specified StopTimeEvent message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeEvent.verify|verify} messages.
       * @param {transit_realtime.TripUpdate.StopTimeEvent$Properties} message StopTimeEvent message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      static encodeDelimited(
        message: TripUpdate.StopTimeEvent$Properties,
        writer?: $protobuf.Writer
      ): $protobuf.Writer
      /**
       * Decodes a StopTimeEvent message from the specified reader or buffer.
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): TripUpdate.StopTimeEvent
      /**
       * Decodes a StopTimeEvent message from the specified reader or buffer, length delimited.
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): TripUpdate.StopTimeEvent
      /**
       * Verifies a StopTimeEvent message.
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {?string} `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [key: string]: any }): string
      /**
       * Creates a StopTimeEvent message from a plain object. Also converts values to their respective internal types.
       * @param {Object.<string,*>} object Plain object
       * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
       */
      static fromObject(object: {
        [key: string]: any
      }): TripUpdate.StopTimeEvent
      /**
       * Creates a StopTimeEvent message from a plain object. Also converts values to their respective internal types.
       * This is an alias of {@link transit_realtime.TripUpdate.StopTimeEvent.fromObject}.
       * @function
       * @param {Object.<string,*>} object Plain object
       * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
       */
      static from(object: { [key: string]: any }): TripUpdate.StopTimeEvent
      /**
       * Creates a plain object from a StopTimeEvent message. Also converts values to other types if specified.
       * @param {transit_realtime.TripUpdate.StopTimeEvent} message StopTimeEvent
       * @param {$protobuf.ConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      static toObject(
        message: TripUpdate.StopTimeEvent,
        options?: $protobuf.ConversionOptions
      ): {
        [key: string]: any
      }
      /**
       * Creates a plain object from this StopTimeEvent message. Also converts values to other types if specified.
       * @param {$protobuf.ConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      toObject(
        options?: $protobuf.ConversionOptions
      ): {
        [key: string]: any
      }
      /**
       * Converts this StopTimeEvent to JSON.
       * @returns {Object.<string,*>} JSON object
       */
      toJSON(): {
        [key: string]: any
      }
    }
    /**
     * Properties of a StopTimeUpdate.
     * @typedef transit_realtime.TripUpdate.StopTimeUpdate$Properties
     * @type {Object}
     * @property {number} [stopSequence] StopTimeUpdate stopSequence.
     * @property {string} [stopId] StopTimeUpdate stopId.
     * @property {transit_realtime.TripUpdate.StopTimeEvent$Properties} [arrival] StopTimeUpdate arrival.
     * @property {transit_realtime.TripUpdate.StopTimeEvent$Properties} [departure] StopTimeUpdate departure.
     * @property {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship} [scheduleRelationship] StopTimeUpdate scheduleRelationship.
     */
    type StopTimeUpdate$Properties = {
      stopSequence?: number
      stopId?: string
      arrival?: TripUpdate.StopTimeEvent$Properties
      departure?: TripUpdate.StopTimeEvent$Properties
      scheduleRelationship?: TripUpdate.StopTimeUpdate.ScheduleRelationship
    }
    /**
     * Constructs a new StopTimeUpdate.
     * @exports transit_realtime.TripUpdate.StopTimeUpdate
     * @constructor
     * @param {transit_realtime.TripUpdate.StopTimeUpdate$Properties=} [properties] Properties to set
     */
    class StopTimeUpdate {
      constructor(properties?: TripUpdate.StopTimeUpdate$Properties)
      /**
       * StopTimeUpdate stopSequence.
       * @type {number}
       */
      stopSequence: number
      /**
       * StopTimeUpdate stopId.
       * @type {string}
       */
      stopId: string
      /**
       * StopTimeUpdate arrival.
       * @type {(transit_realtime.TripUpdate.StopTimeEvent$Properties|null)}
       */
      arrival: TripUpdate.StopTimeEvent$Properties | null
      /**
       * StopTimeUpdate departure.
       * @type {(transit_realtime.TripUpdate.StopTimeEvent$Properties|null)}
       */
      departure: TripUpdate.StopTimeEvent$Properties | null
      /**
       * StopTimeUpdate scheduleRelationship.
       * @type {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship}
       */
      scheduleRelationship: TripUpdate.StopTimeUpdate.ScheduleRelationship
      /**
       * Creates a new StopTimeUpdate instance using the specified properties.
       * @param {transit_realtime.TripUpdate.StopTimeUpdate$Properties=} [properties] Properties to set
       * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate instance
       */
      static create(
        properties?: TripUpdate.StopTimeUpdate$Properties
      ): TripUpdate.StopTimeUpdate
      /**
       * Encodes the specified StopTimeUpdate message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.verify|verify} messages.
       * @param {transit_realtime.TripUpdate.StopTimeUpdate$Properties} message StopTimeUpdate message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      static encode(
        message: TripUpdate.StopTimeUpdate$Properties,
        writer?: $protobuf.Writer
      ): $protobuf.Writer
      /**
       * Encodes the specified StopTimeUpdate message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.verify|verify} messages.
       * @param {transit_realtime.TripUpdate.StopTimeUpdate$Properties} message StopTimeUpdate message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      static encodeDelimited(
        message: TripUpdate.StopTimeUpdate$Properties,
        writer?: $protobuf.Writer
      ): $protobuf.Writer
      /**
       * Decodes a StopTimeUpdate message from the specified reader or buffer.
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): TripUpdate.StopTimeUpdate
      /**
       * Decodes a StopTimeUpdate message from the specified reader or buffer, length delimited.
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): TripUpdate.StopTimeUpdate
      /**
       * Verifies a StopTimeUpdate message.
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {?string} `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [key: string]: any }): string
      /**
       * Creates a StopTimeUpdate message from a plain object. Also converts values to their respective internal types.
       * @param {Object.<string,*>} object Plain object
       * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
       */
      static fromObject(object: {
        [key: string]: any
      }): TripUpdate.StopTimeUpdate
      /**
       * Creates a StopTimeUpdate message from a plain object. Also converts values to their respective internal types.
       * This is an alias of {@link transit_realtime.TripUpdate.StopTimeUpdate.fromObject}.
       * @function
       * @param {Object.<string,*>} object Plain object
       * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
       */
      static from(object: { [key: string]: any }): TripUpdate.StopTimeUpdate
      /**
       * Creates a plain object from a StopTimeUpdate message. Also converts values to other types if specified.
       * @param {transit_realtime.TripUpdate.StopTimeUpdate} message StopTimeUpdate
       * @param {$protobuf.ConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      static toObject(
        message: TripUpdate.StopTimeUpdate,
        options?: $protobuf.ConversionOptions
      ): {
        [key: string]: any
      }
      /**
       * Creates a plain object from this StopTimeUpdate message. Also converts values to other types if specified.
       * @param {$protobuf.ConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      toObject(
        options?: $protobuf.ConversionOptions
      ): {
        [key: string]: any
      }
      /**
       * Converts this StopTimeUpdate to JSON.
       * @returns {Object.<string,*>} JSON object
       */
      toJSON(): {
        [key: string]: any
      }
    }
    module StopTimeUpdate {
      /**
       * ScheduleRelationship enum.
       * @name ScheduleRelationship
       * @memberof transit_realtime.TripUpdate.StopTimeUpdate
       * @enum {number}
       * @property {number} SCHEDULED=0 SCHEDULED value
       * @property {number} SKIPPED=1 SKIPPED value
       * @property {number} NO_DATA=2 NO_DATA value
       */
      enum ScheduleRelationship {
        SCHEDULED,
        SKIPPED,
        NO_DATA
      }
    }
  }
  /**
   * Properties of a VehiclePosition.
   * @typedef transit_realtime.VehiclePosition$Properties
   * @type {Object}
   * @property {transit_realtime.TripDescriptor$Properties} [trip] VehiclePosition trip.
   * @property {transit_realtime.VehicleDescriptor$Properties} [vehicle] VehiclePosition vehicle.
   * @property {transit_realtime.Position$Properties} [position] VehiclePosition position.
   * @property {number} [currentStopSequence] VehiclePosition currentStopSequence.
   * @property {string} [stopId] VehiclePosition stopId.
   * @property {transit_realtime.VehiclePosition.VehicleStopStatus} [currentStatus] VehiclePosition currentStatus.
   * @property {number|Long} [timestamp] VehiclePosition timestamp.
   * @property {transit_realtime.VehiclePosition.CongestionLevel} [congestionLevel] VehiclePosition congestionLevel.
   * @property {transit_realtime.VehiclePosition.OccupancyStatus} [occupancyStatus] VehiclePosition occupancyStatus.
   */
  type VehiclePosition$Properties = {
    trip?: TripDescriptor$Properties
    vehicle?: VehicleDescriptor$Properties
    position?: Position$Properties
    currentStopSequence?: number
    stopId?: string
    currentStatus?: VehiclePosition.VehicleStopStatus
    timestamp?: number
    congestionLevel?: VehiclePosition.CongestionLevel
    occupancyStatus?: VehiclePosition.OccupancyStatus
  }
  /**
   * Constructs a new VehiclePosition.
   * @exports transit_realtime.VehiclePosition
   * @constructor
   * @param {transit_realtime.VehiclePosition$Properties=} [properties] Properties to set
   */
  class VehiclePosition {
    constructor(properties?: VehiclePosition$Properties)
    /**
     * VehiclePosition trip.
     * @type {(transit_realtime.TripDescriptor$Properties|null)}
     */
    trip: TripDescriptor$Properties | null
    /**
     * VehiclePosition vehicle.
     * @type {(transit_realtime.VehicleDescriptor$Properties|null)}
     */
    vehicle: VehicleDescriptor$Properties | null
    /**
     * VehiclePosition position.
     * @type {(transit_realtime.Position$Properties|null)}
     */
    position: Position$Properties | null
    /**
     * VehiclePosition currentStopSequence.
     * @type {number}
     */
    currentStopSequence: number
    /**
     * VehiclePosition stopId.
     * @type {string}
     */
    stopId: string
    /**
     * VehiclePosition currentStatus.
     * @type {transit_realtime.VehiclePosition.VehicleStopStatus}
     */
    currentStatus: VehiclePosition.VehicleStopStatus
    /**
     * VehiclePosition timestamp.
     * @type {number|Long}
     */
    timestamp: number
    /**
     * VehiclePosition congestionLevel.
     * @type {transit_realtime.VehiclePosition.CongestionLevel}
     */
    congestionLevel: VehiclePosition.CongestionLevel
    /**
     * VehiclePosition occupancyStatus.
     * @type {transit_realtime.VehiclePosition.OccupancyStatus}
     */
    occupancyStatus: VehiclePosition.OccupancyStatus
    /**
     * Creates a new VehiclePosition instance using the specified properties.
     * @param {transit_realtime.VehiclePosition$Properties=} [properties] Properties to set
     * @returns {transit_realtime.VehiclePosition} VehiclePosition instance
     */
    static create(properties?: VehiclePosition$Properties): VehiclePosition
    /**
     * Encodes the specified VehiclePosition message. Does not implicitly {@link transit_realtime.VehiclePosition.verify|verify} messages.
     * @param {transit_realtime.VehiclePosition$Properties} message VehiclePosition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: VehiclePosition$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified VehiclePosition message, length delimited. Does not implicitly {@link transit_realtime.VehiclePosition.verify|verify} messages.
     * @param {transit_realtime.VehiclePosition$Properties} message VehiclePosition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: VehiclePosition$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a VehiclePosition message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.VehiclePosition} VehiclePosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): VehiclePosition
    /**
     * Decodes a VehiclePosition message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.VehiclePosition} VehiclePosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): VehiclePosition
    /**
     * Verifies a VehiclePosition message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a VehiclePosition message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.VehiclePosition} VehiclePosition
     */
    static fromObject(object: { [key: string]: any }): VehiclePosition
    /**
     * Creates a VehiclePosition message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.VehiclePosition.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.VehiclePosition} VehiclePosition
     */
    static from(object: { [key: string]: any }): VehiclePosition
    /**
     * Creates a plain object from a VehiclePosition message. Also converts values to other types if specified.
     * @param {transit_realtime.VehiclePosition} message VehiclePosition
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: VehiclePosition,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this VehiclePosition message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this VehiclePosition to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  module VehiclePosition {
    /**
     * VehicleStopStatus enum.
     * @name VehicleStopStatus
     * @memberof transit_realtime.VehiclePosition
     * @enum {number}
     * @property {number} INCOMING_AT=0 INCOMING_AT value
     * @property {number} STOPPED_AT=1 STOPPED_AT value
     * @property {number} IN_TRANSIT_TO=2 IN_TRANSIT_TO value
     */
    enum VehicleStopStatus {
      INCOMING_AT,
      STOPPED_AT,
      IN_TRANSIT_TO
    }
    /**
     * CongestionLevel enum.
     * @name CongestionLevel
     * @memberof transit_realtime.VehiclePosition
     * @enum {number}
     * @property {number} UNKNOWN_CONGESTION_LEVEL=0 UNKNOWN_CONGESTION_LEVEL value
     * @property {number} RUNNING_SMOOTHLY=1 RUNNING_SMOOTHLY value
     * @property {number} STOP_AND_GO=2 STOP_AND_GO value
     * @property {number} CONGESTION=3 CONGESTION value
     * @property {number} SEVERE_CONGESTION=4 SEVERE_CONGESTION value
     */
    enum CongestionLevel {
      UNKNOWN_CONGESTION_LEVEL,
      RUNNING_SMOOTHLY,
      STOP_AND_GO,
      CONGESTION,
      SEVERE_CONGESTION
    }
    /**
     * OccupancyStatus enum.
     * @name OccupancyStatus
     * @memberof transit_realtime.VehiclePosition
     * @enum {number}
     * @property {number} EMPTY=0 EMPTY value
     * @property {number} MANY_SEATS_AVAILABLE=1 MANY_SEATS_AVAILABLE value
     * @property {number} FEW_SEATS_AVAILABLE=2 FEW_SEATS_AVAILABLE value
     * @property {number} STANDING_ROOM_ONLY=3 STANDING_ROOM_ONLY value
     * @property {number} CRUSHED_STANDING_ROOM_ONLY=4 CRUSHED_STANDING_ROOM_ONLY value
     * @property {number} FULL=5 FULL value
     * @property {number} NOT_ACCEPTING_PASSENGERS=6 NOT_ACCEPTING_PASSENGERS value
     */
    enum OccupancyStatus {
      EMPTY,
      MANY_SEATS_AVAILABLE,
      FEW_SEATS_AVAILABLE,
      STANDING_ROOM_ONLY,
      CRUSHED_STANDING_ROOM_ONLY,
      FULL,
      NOT_ACCEPTING_PASSENGERS
    }
  }
  /**
   * Properties of an Alert.
   * @typedef transit_realtime.Alert$Properties
   * @type {Object}
   * @property {Array.<transit_realtime.TimeRange$Properties>} [active_period] Alert activePeriod.
   * @property {Array.<transit_realtime.EntitySelector$Properties>} [informed_entity] Alert informedEntity.
   * @property {transit_realtime.Alert.Cause} [cause] Alert cause.
   * @property {transit_realtime.Alert.Effect} [effect] Alert effect.
   * @property {transit_realtime.TranslatedString$Properties} [url] Alert url.
   * @property {transit_realtime.TranslatedString$Properties} [header_text] Alert headerText.
   * @property {transit_realtime.TranslatedString$Properties} [description_text] Alert descriptionText.
   */
  type Alert$Properties = {
    active_period?: TimeRange$Properties[]
    informed_entity?: EntitySelector$Properties[]
    cause?: Alert.Cause
    effect?: Alert.Effect
    url?: TranslatedString$Properties
    header_text?: TranslatedString$Properties
    description_text?: TranslatedString$Properties
  }
  /**
   * Constructs a new Alert.
   * @exports transit_realtime.Alert
   * @constructor
   * @param {transit_realtime.Alert$Properties=} [properties] Properties to set
   */
  class Alert {
    constructor(properties?: Alert$Properties)
    /**
     * Alert activePeriod.
     * @type {Array.<transit_realtime.TimeRange$Properties>}
     */
    active_period: TimeRange$Properties[]
    /**
     * Alert informedEntity.
     * @type {Array.<transit_realtime.EntitySelector$Properties>}
     */
    informed_entity: EntitySelector$Properties[]
    /**
     * Alert cause.
     * @type {transit_realtime.Alert.Cause}
     */
    cause: Alert.Cause
    /**
     * Alert effect.
     * @type {transit_realtime.Alert.Effect}
     */
    effect: Alert.Effect
    /**
     * Alert url.
     * @type {(transit_realtime.TranslatedString$Properties|null)}
     */
    url: TranslatedString$Properties | null
    /**
     * Alert headerText.
     * @type {(transit_realtime.TranslatedString$Properties|null)}
     */
    header_text: TranslatedString$Properties | null
    /**
     * Alert descriptionText.
     * @type {(transit_realtime.TranslatedString$Properties|null)}
     */
    description_text: TranslatedString$Properties | null
    /**
     * Creates a new Alert instance using the specified properties.
     * @param {transit_realtime.Alert$Properties=} [properties] Properties to set
     * @returns {transit_realtime.Alert} Alert instance
     */
    static create(properties?: Alert$Properties): Alert
    /**
     * Encodes the specified Alert message. Does not implicitly {@link transit_realtime.Alert.verify|verify} messages.
     * @param {transit_realtime.Alert$Properties} message Alert message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: Alert$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified Alert message, length delimited. Does not implicitly {@link transit_realtime.Alert.verify|verify} messages.
     * @param {transit_realtime.Alert$Properties} message Alert message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: Alert$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes an Alert message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.Alert} Alert
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Alert
    /**
     * Decodes an Alert message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.Alert} Alert
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Alert
    /**
     * Verifies an Alert message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates an Alert message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.Alert} Alert
     */
    static fromObject(object: { [key: string]: any }): Alert
    /**
     * Creates an Alert message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.Alert.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.Alert} Alert
     */
    static from(object: { [key: string]: any }): Alert
    /**
     * Creates a plain object from an Alert message. Also converts values to other types if specified.
     * @param {transit_realtime.Alert} message Alert
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: Alert,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this Alert message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this Alert to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  module Alert {
    /**
     * Cause enum.
     * @name Cause
     * @memberof transit_realtime.Alert
     * @enum {number}
     * @property {number} UNKNOWN_CAUSE=1 UNKNOWN_CAUSE value
     * @property {number} OTHER_CAUSE=2 OTHER_CAUSE value
     * @property {number} TECHNICAL_PROBLEM=3 TECHNICAL_PROBLEM value
     * @property {number} STRIKE=4 STRIKE value
     * @property {number} DEMONSTRATION=5 DEMONSTRATION value
     * @property {number} ACCIDENT=6 ACCIDENT value
     * @property {number} HOLIDAY=7 HOLIDAY value
     * @property {number} WEATHER=8 WEATHER value
     * @property {number} MAINTENANCE=9 MAINTENANCE value
     * @property {number} CONSTRUCTION=10 CONSTRUCTION value
     * @property {number} POLICE_ACTIVITY=11 POLICE_ACTIVITY value
     * @property {number} MEDICAL_EMERGENCY=12 MEDICAL_EMERGENCY value
     */
    enum Cause {
      UNKNOWN_CAUSE,
      OTHER_CAUSE,
      TECHNICAL_PROBLEM,
      STRIKE,
      DEMONSTRATION,
      ACCIDENT,
      HOLIDAY,
      WEATHER,
      MAINTENANCE,
      CONSTRUCTION,
      POLICE_ACTIVITY,
      MEDICAL_EMERGENCY
    }
    /**
     * Effect enum.
     * @name Effect
     * @memberof transit_realtime.Alert
     * @enum {number}
     * @property {number} NO_SERVICE=1 NO_SERVICE value
     * @property {number} REDUCED_SERVICE=2 REDUCED_SERVICE value
     * @property {number} SIGNIFICANT_DELAYS=3 SIGNIFICANT_DELAYS value
     * @property {number} DETOUR=4 DETOUR value
     * @property {number} ADDITIONAL_SERVICE=5 ADDITIONAL_SERVICE value
     * @property {number} MODIFIED_SERVICE=6 MODIFIED_SERVICE value
     * @property {number} OTHER_EFFECT=7 OTHER_EFFECT value
     * @property {number} UNKNOWN_EFFECT=8 UNKNOWN_EFFECT value
     * @property {number} STOP_MOVED=9 STOP_MOVED value
     */
    enum Effect {
      NO_SERVICE,
      REDUCED_SERVICE,
      SIGNIFICANT_DELAYS,
      DETOUR,
      ADDITIONAL_SERVICE,
      MODIFIED_SERVICE,
      OTHER_EFFECT,
      UNKNOWN_EFFECT,
      STOP_MOVED
    }
  }
  /**
   * Properties of a TimeRange.
   * @typedef transit_realtime.TimeRange$Properties
   * @type {Object}
   * @property {number|Long} [start] TimeRange start.
   * @property {number|Long} [end] TimeRange end.
   */
  type TimeRange$Properties = {
    start?: number
    end?: number
  }
  /**
   * Constructs a new TimeRange.
   * @exports transit_realtime.TimeRange
   * @constructor
   * @param {transit_realtime.TimeRange$Properties=} [properties] Properties to set
   */
  class TimeRange {
    constructor(properties?: TimeRange$Properties)
    /**
     * TimeRange start.
     * @type {number}
     */
    start: number
    /**
     * TimeRange end.
     * @type {number}
     */
    end: number
    /**
     * Creates a new TimeRange instance using the specified properties.
     * @param {transit_realtime.TimeRange$Properties=} [properties] Properties to set
     * @returns {transit_realtime.TimeRange} TimeRange instance
     */
    static create(properties?: TimeRange$Properties): TimeRange
    /**
     * Encodes the specified TimeRange message. Does not implicitly {@link transit_realtime.TimeRange.verify|verify} messages.
     * @param {transit_realtime.TimeRange$Properties} message TimeRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: TimeRange$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified TimeRange message, length delimited. Does not implicitly {@link transit_realtime.TimeRange.verify|verify} messages.
     * @param {transit_realtime.TimeRange$Properties} message TimeRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: TimeRange$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a TimeRange message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.TimeRange} TimeRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): TimeRange
    /**
     * Decodes a TimeRange message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.TimeRange} TimeRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TimeRange
    /**
     * Verifies a TimeRange message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TimeRange} TimeRange
     */
    static fromObject(object: { [key: string]: any }): TimeRange
    /**
     * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.TimeRange.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TimeRange} TimeRange
     */
    static from(object: { [key: string]: any }): TimeRange
    /**
     * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
     * @param {transit_realtime.TimeRange} message TimeRange
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: TimeRange,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this TimeRange message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this TimeRange to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  /**
   * Properties of a Position.
   * @typedef transit_realtime.Position$Properties
   * @type {Object}
   * @property {number} latitude Position latitude.
   * @property {number} longitude Position longitude.
   * @property {number} [bearing] Position bearing.
   * @property {number} [odometer] Position odometer.
   * @property {number} [speed] Position speed.
   */
  type Position$Properties = {
    latitude: number
    longitude: number
    bearing?: number
    odometer?: number
    speed?: number
  }
  /**
   * Constructs a new Position.
   * @exports transit_realtime.Position
   * @constructor
   * @param {transit_realtime.Position$Properties=} [properties] Properties to set
   */
  class Position {
    constructor(properties?: Position$Properties)
    /**
     * Position latitude.
     * @type {number}
     */
    latitude: number
    /**
     * Position longitude.
     * @type {number}
     */
    longitude: number
    /**
     * Position bearing.
     * @type {number}
     */
    bearing: number
    /**
     * Position odometer.
     * @type {number}
     */
    odometer: number
    /**
     * Position speed.
     * @type {number}
     */
    speed: number
    /**
     * Creates a new Position instance using the specified properties.
     * @param {transit_realtime.Position$Properties=} [properties] Properties to set
     * @returns {transit_realtime.Position} Position instance
     */
    static create(properties?: Position$Properties): Position
    /**
     * Encodes the specified Position message. Does not implicitly {@link transit_realtime.Position.verify|verify} messages.
     * @param {transit_realtime.Position$Properties} message Position message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: Position$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified Position message, length delimited. Does not implicitly {@link transit_realtime.Position.verify|verify} messages.
     * @param {transit_realtime.Position$Properties} message Position message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: Position$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a Position message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.Position} Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Position
    /**
     * Decodes a Position message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.Position} Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Position
    /**
     * Verifies a Position message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a Position message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.Position} Position
     */
    static fromObject(object: { [key: string]: any }): Position
    /**
     * Creates a Position message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.Position.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.Position} Position
     */
    static from(object: { [key: string]: any }): Position
    /**
     * Creates a plain object from a Position message. Also converts values to other types if specified.
     * @param {transit_realtime.Position} message Position
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: Position,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this Position message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this Position to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  /**
   * Properties of a TripDescriptor.
   * @typedef transit_realtime.TripDescriptor$Properties
   * @type {Object}
   * @property {string} [tripId] TripDescriptor tripId.
   * @property {string} [routeId] TripDescriptor routeId.
   * @property {number} [directionId] TripDescriptor directionId.
   * @property {string} [startTime] TripDescriptor startTime.
   * @property {string} [startDate] TripDescriptor startDate.
   * @property {transit_realtime.TripDescriptor.ScheduleRelationship} [scheduleRelationship] TripDescriptor scheduleRelationship.
   */
  type TripDescriptor$Properties = {
    tripId?: string
    routeId?: string
    directionId?: number
    startTime?: string
    startDate?: string
    scheduleRelationship?: TripDescriptor.ScheduleRelationship
  }
  /**
   * Constructs a new TripDescriptor.
   * @exports transit_realtime.TripDescriptor
   * @constructor
   * @param {transit_realtime.TripDescriptor$Properties=} [properties] Properties to set
   */
  class TripDescriptor {
    constructor(properties?: TripDescriptor$Properties)
    /**
     * TripDescriptor tripId.
     * @type {string}
     */
    tripId: string
    /**
     * TripDescriptor routeId.
     * @type {string}
     */
    routeId: string
    /**
     * TripDescriptor directionId.
     * @type {number}
     */
    directionId: number
    /**
     * TripDescriptor startTime.
     * @type {string}
     */
    startTime: string
    /**
     * TripDescriptor startDate.
     * @type {string}
     */
    startDate: string
    /**
     * TripDescriptor scheduleRelationship.
     * @type {transit_realtime.TripDescriptor.ScheduleRelationship}
     */
    scheduleRelationship: TripDescriptor.ScheduleRelationship
    /**
     * Creates a new TripDescriptor instance using the specified properties.
     * @param {transit_realtime.TripDescriptor$Properties=} [properties] Properties to set
     * @returns {transit_realtime.TripDescriptor} TripDescriptor instance
     */
    static create(properties?: TripDescriptor$Properties): TripDescriptor
    /**
     * Encodes the specified TripDescriptor message. Does not implicitly {@link transit_realtime.TripDescriptor.verify|verify} messages.
     * @param {transit_realtime.TripDescriptor$Properties} message TripDescriptor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: TripDescriptor$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified TripDescriptor message, length delimited. Does not implicitly {@link transit_realtime.TripDescriptor.verify|verify} messages.
     * @param {transit_realtime.TripDescriptor$Properties} message TripDescriptor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: TripDescriptor$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a TripDescriptor message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.TripDescriptor} TripDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): TripDescriptor
    /**
     * Decodes a TripDescriptor message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.TripDescriptor} TripDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): TripDescriptor
    /**
     * Verifies a TripDescriptor message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a TripDescriptor message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TripDescriptor} TripDescriptor
     */
    static fromObject(object: { [key: string]: any }): TripDescriptor
    /**
     * Creates a TripDescriptor message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.TripDescriptor.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TripDescriptor} TripDescriptor
     */
    static from(object: { [key: string]: any }): TripDescriptor
    /**
     * Creates a plain object from a TripDescriptor message. Also converts values to other types if specified.
     * @param {transit_realtime.TripDescriptor} message TripDescriptor
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: TripDescriptor,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this TripDescriptor message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this TripDescriptor to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  module TripDescriptor {
    /**
     * ScheduleRelationship enum.
     * @name ScheduleRelationship
     * @memberof transit_realtime.TripDescriptor
     * @enum {number}
     * @property {number} SCHEDULED=0 SCHEDULED value
     * @property {number} ADDED=1 ADDED value
     * @property {number} UNSCHEDULED=2 UNSCHEDULED value
     * @property {number} CANCELED=3 CANCELED value
     */
    enum ScheduleRelationship {
      SCHEDULED,
      ADDED,
      UNSCHEDULED,
      CANCELED
    }
  }
  /**
   * Properties of a VehicleDescriptor.
   * @typedef transit_realtime.VehicleDescriptor$Properties
   * @type {Object}
   * @property {string} [id] VehicleDescriptor id.
   * @property {string} [label] VehicleDescriptor label.
   * @property {string} [licensePlate] VehicleDescriptor licensePlate.
   */
  type VehicleDescriptor$Properties = {
    id?: string
    label?: string
    licensePlate?: string
  }
  /**
   * Constructs a new VehicleDescriptor.
   * @exports transit_realtime.VehicleDescriptor
   * @constructor
   * @param {transit_realtime.VehicleDescriptor$Properties=} [properties] Properties to set
   */
  class VehicleDescriptor {
    constructor(properties?: VehicleDescriptor$Properties)
    /**
     * VehicleDescriptor id.
     * @type {string}
     */
    id: string
    /**
     * VehicleDescriptor label.
     * @type {string}
     */
    label: string
    /**
     * VehicleDescriptor licensePlate.
     * @type {string}
     */
    licensePlate: string
    /**
     * Creates a new VehicleDescriptor instance using the specified properties.
     * @param {transit_realtime.VehicleDescriptor$Properties=} [properties] Properties to set
     * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor instance
     */
    static create(properties?: VehicleDescriptor$Properties): VehicleDescriptor
    /**
     * Encodes the specified VehicleDescriptor message. Does not implicitly {@link transit_realtime.VehicleDescriptor.verify|verify} messages.
     * @param {transit_realtime.VehicleDescriptor$Properties} message VehicleDescriptor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: VehicleDescriptor$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified VehicleDescriptor message, length delimited. Does not implicitly {@link transit_realtime.VehicleDescriptor.verify|verify} messages.
     * @param {transit_realtime.VehicleDescriptor$Properties} message VehicleDescriptor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: VehicleDescriptor$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a VehicleDescriptor message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): VehicleDescriptor
    /**
     * Decodes a VehicleDescriptor message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): VehicleDescriptor
    /**
     * Verifies a VehicleDescriptor message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a VehicleDescriptor message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
     */
    static fromObject(object: { [key: string]: any }): VehicleDescriptor
    /**
     * Creates a VehicleDescriptor message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.VehicleDescriptor.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
     */
    static from(object: { [key: string]: any }): VehicleDescriptor
    /**
     * Creates a plain object from a VehicleDescriptor message. Also converts values to other types if specified.
     * @param {transit_realtime.VehicleDescriptor} message VehicleDescriptor
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: VehicleDescriptor,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this VehicleDescriptor message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this VehicleDescriptor to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  /**
   * Properties of an EntitySelector.
   * @typedef transit_realtime.EntitySelector$Properties
   * @type {Object}
   * @property {string} [agency_id] EntitySelector agencyId.
   * @property {string} [route_id] EntitySelector routeId.
   * @property {number} [route_type] EntitySelector routeType.
   * @property {transit_realtime.TripDescriptor$Properties} [trip] EntitySelector trip.
   * @property {string} [stop_id] EntitySelector stopId.
   */
  type EntitySelector$Properties = {
    agency_id?: string
    route_id?: string
    route_type?: number
    trip?: TripDescriptor$Properties
    stop_id?: string
  }
  /**
   * Constructs a new EntitySelector.
   * @exports transit_realtime.EntitySelector
   * @constructor
   * @param {transit_realtime.EntitySelector$Properties=} [properties] Properties to set
   */
  class EntitySelector {
    constructor(properties?: EntitySelector$Properties)
    /**
     * EntitySelector agencyId.
     * @type {string}
     */
    agencyId: string
    /**
     * EntitySelector routeId.
     * @type {string}
     */
    routeId: string
    /**
     * EntitySelector routeType.
     * @type {number}
     */
    routeType: number
    /**
     * EntitySelector trip.
     * @type {(transit_realtime.TripDescriptor$Properties|null)}
     */
    trip: TripDescriptor$Properties | null
    /**
     * EntitySelector stopId.
     * @type {string}
     */
    stopId: string
    /**
     * Creates a new EntitySelector instance using the specified properties.
     * @param {transit_realtime.EntitySelector$Properties=} [properties] Properties to set
     * @returns {transit_realtime.EntitySelector} EntitySelector instance
     */
    static create(properties?: EntitySelector$Properties): EntitySelector
    /**
     * Encodes the specified EntitySelector message. Does not implicitly {@link transit_realtime.EntitySelector.verify|verify} messages.
     * @param {transit_realtime.EntitySelector$Properties} message EntitySelector message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: EntitySelector$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified EntitySelector message, length delimited. Does not implicitly {@link transit_realtime.EntitySelector.verify|verify} messages.
     * @param {transit_realtime.EntitySelector$Properties} message EntitySelector message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: EntitySelector$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes an EntitySelector message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.EntitySelector} EntitySelector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): EntitySelector
    /**
     * Decodes an EntitySelector message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.EntitySelector} EntitySelector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): EntitySelector
    /**
     * Verifies an EntitySelector message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates an EntitySelector message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.EntitySelector} EntitySelector
     */
    static fromObject(object: { [key: string]: any }): EntitySelector
    /**
     * Creates an EntitySelector message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.EntitySelector.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.EntitySelector} EntitySelector
     */
    static from(object: { [key: string]: any }): EntitySelector
    /**
     * Creates a plain object from an EntitySelector message. Also converts values to other types if specified.
     * @param {transit_realtime.EntitySelector} message EntitySelector
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: EntitySelector,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this EntitySelector message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this EntitySelector to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  /**
   * Properties of a TranslatedString.
   * @typedef transit_realtime.TranslatedString$Properties
   * @type {Object}
   * @property {Array.<transit_realtime.TranslatedString.Translation$Properties>} [translation] TranslatedString translation.
   */
  type TranslatedString$Properties = {
    translation?: TranslatedString.Translation$Properties[]
  }
  /**
   * Constructs a new TranslatedString.
   * @exports transit_realtime.TranslatedString
   * @constructor
   * @param {transit_realtime.TranslatedString$Properties=} [properties] Properties to set
   */
  class TranslatedString {
    constructor(properties?: TranslatedString$Properties)
    /**
     * TranslatedString translation.
     * @type {Array.<transit_realtime.TranslatedString.Translation$Properties>}
     */
    translation: TranslatedString.Translation$Properties[]
    /**
     * Creates a new TranslatedString instance using the specified properties.
     * @param {transit_realtime.TranslatedString$Properties=} [properties] Properties to set
     * @returns {transit_realtime.TranslatedString} TranslatedString instance
     */
    static create(properties?: TranslatedString$Properties): TranslatedString
    /**
     * Encodes the specified TranslatedString message. Does not implicitly {@link transit_realtime.TranslatedString.verify|verify} messages.
     * @param {transit_realtime.TranslatedString$Properties} message TranslatedString message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(
      message: TranslatedString$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Encodes the specified TranslatedString message, length delimited. Does not implicitly {@link transit_realtime.TranslatedString.verify|verify} messages.
     * @param {transit_realtime.TranslatedString$Properties} message TranslatedString message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(
      message: TranslatedString$Properties,
      writer?: $protobuf.Writer
    ): $protobuf.Writer
    /**
     * Decodes a TranslatedString message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {transit_realtime.TranslatedString} TranslatedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): TranslatedString
    /**
     * Decodes a TranslatedString message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {transit_realtime.TranslatedString} TranslatedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): TranslatedString
    /**
     * Verifies a TranslatedString message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [key: string]: any }): string
    /**
     * Creates a TranslatedString message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TranslatedString} TranslatedString
     */
    static fromObject(object: { [key: string]: any }): TranslatedString
    /**
     * Creates a TranslatedString message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link transit_realtime.TranslatedString.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {transit_realtime.TranslatedString} TranslatedString
     */
    static from(object: { [key: string]: any }): TranslatedString
    /**
     * Creates a plain object from a TranslatedString message. Also converts values to other types if specified.
     * @param {transit_realtime.TranslatedString} message TranslatedString
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(
      message: TranslatedString,
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Creates a plain object from this TranslatedString message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(
      options?: $protobuf.ConversionOptions
    ): {
      [key: string]: any
    }
    /**
     * Converts this TranslatedString to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): {
      [key: string]: any
    }
  }
  module TranslatedString {
    /**
     * Properties of a Translation.
     * @typedef transit_realtime.TranslatedString.Translation$Properties
     * @type {Object}
     * @property {string} text Translation text.
     * @property {string} [language] Translation language.
     */
    type Translation$Properties = {
      text: string
      language?: string
    }
    /**
     * Constructs a new Translation.
     * @exports transit_realtime.TranslatedString.Translation
     * @constructor
     * @param {transit_realtime.TranslatedString.Translation$Properties=} [properties] Properties to set
     */
    class Translation {
      constructor(properties?: TranslatedString.Translation$Properties)
      /**
       * Translation text.
       * @type {string}
       */
      text: string
      /**
       * Translation language.
       * @type {string}
       */
      language: string
      /**
       * Creates a new Translation instance using the specified properties.
       * @param {transit_realtime.TranslatedString.Translation$Properties=} [properties] Properties to set
       * @returns {transit_realtime.TranslatedString.Translation} Translation instance
       */
      static create(
        properties?: TranslatedString.Translation$Properties
      ): TranslatedString.Translation
      /**
       * Encodes the specified Translation message. Does not implicitly {@link transit_realtime.TranslatedString.Translation.verify|verify} messages.
       * @param {transit_realtime.TranslatedString.Translation$Properties} message Translation message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      static encode(
        message: TranslatedString.Translation$Properties,
        writer?: $protobuf.Writer
      ): $protobuf.Writer
      /**
       * Encodes the specified Translation message, length delimited. Does not implicitly {@link transit_realtime.TranslatedString.Translation.verify|verify} messages.
       * @param {transit_realtime.TranslatedString.Translation$Properties} message Translation message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      static encodeDelimited(
        message: TranslatedString.Translation$Properties,
        writer?: $protobuf.Writer
      ): $protobuf.Writer
      /**
       * Decodes a Translation message from the specified reader or buffer.
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {transit_realtime.TranslatedString.Translation} Translation
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): TranslatedString.Translation
      /**
       * Decodes a Translation message from the specified reader or buffer, length delimited.
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {transit_realtime.TranslatedString.Translation} Translation
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): TranslatedString.Translation
      /**
       * Verifies a Translation message.
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {?string} `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [key: string]: any }): string
      /**
       * Creates a Translation message from a plain object. Also converts values to their respective internal types.
       * @param {Object.<string,*>} object Plain object
       * @returns {transit_realtime.TranslatedString.Translation} Translation
       */
      static fromObject(object: {
        [key: string]: any
      }): TranslatedString.Translation
      /**
       * Creates a Translation message from a plain object. Also converts values to their respective internal types.
       * This is an alias of {@link transit_realtime.TranslatedString.Translation.fromObject}.
       * @function
       * @param {Object.<string,*>} object Plain object
       * @returns {transit_realtime.TranslatedString.Translation} Translation
       */
      static from(object: { [key: string]: any }): TranslatedString.Translation
      /**
       * Creates a plain object from a Translation message. Also converts values to other types if specified.
       * @param {transit_realtime.TranslatedString.Translation} message Translation
       * @param {$protobuf.ConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      static toObject(
        message: TranslatedString.Translation,
        options?: $protobuf.ConversionOptions
      ): {
        [key: string]: any
      }
      /**
       * Creates a plain object from this Translation message. Also converts values to other types if specified.
       * @param {$protobuf.ConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      toObject(
        options?: $protobuf.ConversionOptions
      ): {
        [key: string]: any
      }
      /**
       * Converts this Translation to JSON.
       * @returns {Object.<string,*>} JSON object
       */
      toJSON(): {
        [key: string]: any
      }
    }
  }
}
